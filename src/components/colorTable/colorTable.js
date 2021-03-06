import React from 'react';
import ColorRow from './ColorRow';

class ColorTable extends React.Component{
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(function(response) {
        var sortable = [];
        for (let color in response.data) {

          sortable.push({
            name: color,
            hex: response.data[color],
            h: Math.round(tinycolor(color).toHsl().h),
            s: Math.round(100 * tinycolor(color).toHsl().s),
            l: Math.round(100 * tinycolor(color).toHsl().l)
          });
        }
        var sortedByShade = _.orderBy(sortable, ["h", "s", "l"], ['asc', 'asc', 'asc']);
        this.setState({data: sortedByShade, loading: false});
      }.bind(this))
      .catch(function(error) {
        console.warn('Error', error.message);
    });
  }

  eachColor(color,i) {
  if (!color.name.includes(this.props.filterText)) return;
  return (
    <ColorRow key={color.name} index={i}>
       {color}
     </ColorRow>
   );
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"></div>;
    } else {
      return (
        <table>
          <tbody>
          {this.state.data.map(this.eachColor.bind(this))}
          </tbody>
        </table>
      );
    }
  }
}

export default ColorTable;

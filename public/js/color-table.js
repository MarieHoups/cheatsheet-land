function setTextColor(lightness) {
  return lightness > 45 ? "#333" : "#eee";
}

var Color = React.createClass({
  getInitialState: function() {
    return {
        color: setTextColor(this.props.children.l),
        background: this.props.children.hex
    };
  },
  render: function() {
    var hsl = 'hsl(' + this.props.children.h + ', ' + this.props.children.s + '%, ' + this.props.children.l + '%)';
    return (
      <tbody>
      <tr style={this.state}>
        <td>{this.props.children.name}</td>
        <td>{this.props.children.hex}</td>
        <td>{hsl}</td>
      </tr>
      </tbody>
    );
  }
});

var ColorTable = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      loading: false
    };
  },
  componentDidMount: function() {
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
        this.setState({data: sortedByShade});
      }.bind(this))
      .catch(function(error) {
        console.warn('Error', error.message);
    });
  },
  eachColor: function(color,i) {
    if (color.name.indexOf(this.props.filterText) === -1) return;
   return (
    <Color key={color.name} index={i}>
       {color}
     </Color>
   );
  },
  render: function() {
    return (
      <table>
        {this.state.data.map(this.eachColor)}
      </table>
    );
  }
});
var SearchInput = React.createClass({
    handleChange: function() {
    this.props.onUserInput(this.refs.filterTextInput.value);
    },
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search by name..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        </form>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  render: function() {
    return (
      <div>
        <SearchInput
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ColorTable
          url="https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json"
          colors={this.props.data}
          filterText={this.state.filterText}/>
      </div>
    );
  }
});

ReactDOM.render( <App />, document.getElementById('container'));
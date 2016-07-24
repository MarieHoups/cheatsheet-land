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
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: true,
      beforeSend: function() {
        this.setState({loading: true});
      }.bind(this),
      complete: function() {
        this.setState({loading: false});
      }.bind(this),
      success: function(data) {
        var sortable = [];
        for (let obj in data) {

          sortable.push({
            name: obj,
            hex: data[obj],
            h: Math.round(tinycolor(obj).toHsl().h),
            s: Math.round(100 * tinycolor(obj).toHsl().s),
            l: Math.round(100 * tinycolor(obj).toHsl().l)
          });
        }
        var sortedByShade = _.orderBy(sortable, ["h", "s", "l"], ['asc', 'asc', 'asc']);

        this.setState({data: sortedByShade});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
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
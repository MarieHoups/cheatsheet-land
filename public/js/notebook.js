var Page = React.createClass({
  getInitialState: function() {
    return {cl: "stack-0"};
  },
  handleClick: function(e, i) {
    e.preventDefault();
    console.log(this);
    this.setState({cl: "stack-1"});
  },
  render: function() {
    var rows = [];
    this.props.shortcuts.forEach(function(row) {
      rows.push(<Row shortcut={row.shortcut} description={row.description}/>)
    });
    console.log(this.props);
    return (
      <section className={"cheat stack " + this.state.cl} onClick={this.handleClick}  style={this.props.style}>
        <table>
          <caption>{this.props.caption}</caption>
          <tbody>
            <tr>
              <th>Keys</th>
              <th>Description</th>
            </tr>
            {rows}
          </tbody>
        </table>
      </section>
    );
  }
});

var Row = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.shortcut}</td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
});

var Notebook = React.createClass({
  getInitialState: function() {
    return {
      data: [
      {topic: "iTerm", style: {background: "#333"}, shortcuts: [
              {shortcut: "shift", description: "blah"},
        {shortcut: "pomme", description: "goldenrod"}]},
      {topic: "Sketch", style: {background: "goldenrod"}, shortcuts: [
              {shortcut: "shift", description: "blah blah"},
        {shortcut: "pomme", description: "goldenrod"}]}
      ]
    };
  },
  render: function() {
    var tabs = [];
    this.state.data.forEach(function(page) {
      tabs.push(<Page caption={page.topic} key={page.topic} shortcuts={page.shortcuts} style={page.style}/>);
      console.log(page);
    });
    return (
      <div>{tabs}</div>
    );
  }
});

ReactDOM.render( <Notebook />, document.getElementById('wrapper'));

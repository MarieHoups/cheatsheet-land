var React = require('react'),
Router = require('react-router'),
    Link = Router.Link;

var Layout = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>
            <Link to="/color-table">Color Table</Link>
          </li>
          <li>
            <Link to="/shortcuts">Shortcuts</Link>
          </li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
})

module.exports = Layout;

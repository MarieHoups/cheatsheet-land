var React = require('react'),
Router = require('react-router'),
    Link = Router.Link;

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/color-table">Color Table</Link>
          </li>
          <li>
            <Link to="/notebook">Shortcuts</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
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

import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component{
  render() {
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
}

export default Layout;

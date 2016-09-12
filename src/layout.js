import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component{
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
            <li>
              <Link to="/color-table">Color Table</Link>
            </li>
            <li>
              <Link to="/notebook">Shortcuts</Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;

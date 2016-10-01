import React from 'react';
import { Link } from 'react-router';
import Footer from './components/footer';

class Layout extends React.Component{
  render() {
    return (
      <div className="flex-container">
        <nav>
          <ul>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
            <li>
              <Link to="/color-table">Color Table</Link>
            </li>
          </ul>
        </nav>
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

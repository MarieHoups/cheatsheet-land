import React from 'react';

const Sidebar = (props) => {
  var thumbnails = props.thumbnails.map(function(thumbnail, i) {
    return ( <div className="storage" style={thumbnail} key={i}></div> );
  });
  return (
    <section className="code">
      <pre>
        <code>
          background: {props.snippet.background}
          {'\n'}
          height: {props.snippet.height}
          {'\n'}
          width: {props.snippet.width}
          {'\n'}
          box-shadow: {props.snippet.boxShadow}
          {'\n'}
          border-radius: {
            `${props.snippet.borderTopLeftRadius || 0} ${props.snippet.borderTopRightRadius || 0} ${props.snippet.borderBottomLeftRadius || 0} ${props.snippet.borderBottomRightRadius || 0}`}
          {'\n'}
          border-style: {props.snippet.borderStyle}
          {'\n'}
          border-width: {
            `${props.snippet.borderTopWidth || 0} ${props.snippet.borderRightWidth || 0} ${props.snippet.borderBottomWidth || 0} ${props.snippet.borderLeftWidth || 0}`}
          {'\n'}
          border-color: {props.snippet.borderColor}
          {'\n'}
          background-image:
          {props.snippet.backgroundImage}
        </code>
      </pre>
      <div>
        <button onClick={props.onClear}>Clear all</button>
        <aside className="thumbnails">
          { thumbnails }
        </aside>
      </div>
    </section>
  );
}

export default Sidebar;

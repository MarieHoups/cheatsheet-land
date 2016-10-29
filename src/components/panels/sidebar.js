import React from 'react';

const Sidebar = (props) => {
  const thumbnails = props.thumbnails.map(function(thumbnail, i) {
    return ( <div className="storage" style={thumbnail} key={i}></div> );
  });
  const cssSnippet = `.myShape {
  background: ${props.snippet.background};
  height: ${props.snippet.height};
  width: ${props.snippet.width};
  box-shadow:
    ${props.snippet.boxShadow || ''};
  border-radius: ${props.snippet.borderTopLeftRadius || 0} ${props.snippet.borderTopRightRadius || 0} ${props.snippet.borderBottomLeftRadius || 0} ${props.snippet.borderBottomRightRadius || 0};
  border-style: ${props.snippet.borderStyle};
  border-width: ${props.snippet.borderTopWidth || 0} ${props.snippet.borderRightWidth || 0} ${props.snippet.borderBottomWidth || 0} ${props.snippet.borderLeftWidth || 0};
  border-color: ${props.snippet.borderColor};
  background-image:
    ${props.snippet.backgroundImage};
}`;
  return (
    <section className="code">
      <pre>
        <code>
          { cssSnippet }
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

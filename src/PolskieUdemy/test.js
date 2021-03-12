import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div style={{ cursor: "pointer", textAlign: "center", margin: "100px" }}>
        <hr style={{ margin: "10px" }}></hr>
      <p>You clicked {count} times</p>
      <button className='btn_mar' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr style={{ margin: "10px" }}></hr>
    </div>
  );
}

export default Example
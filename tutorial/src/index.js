import React from "react";
import ReactDom from "react-dom";

// capitalize first letter for components
function Greeting() {
  return <h4>Hello, here's the first component.</h4>;
  html;
}

//  pass in what and where to render (Greeting component, and root id in index.html)
ReactDom.render(<Greeting />, document.getElementById("root"));

// Type "rafce" to create a React Arrow Function Component with ES7 moudle syste (ES7+React/Redux/React-Native snippets)

import React from "react";

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function HelloReact() {
  const text = "some text";

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return <h1>Hello World! Here is {text}</h1>;
}

export default HelloReact;

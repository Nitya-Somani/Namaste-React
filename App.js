import React from "react";
import ReactDOM from "react-dom/client";

// How can i put react element inside react component ?

//creating React element

const reactElem = <h1>React element here </h1>;

//creating React functional component

const Heading = () => <div id="container">{reactElem}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)

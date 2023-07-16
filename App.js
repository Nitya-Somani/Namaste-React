import React from "react";
/* import explained - what are we importing ?
we are importing React from "react" module that is present in node_modules 
*/
import ReactDOM from "react-dom/client";
/* import Explained - what are we importing ?
we are importing ReactDOM  from "react-dom module that is present in node_modules"
 */

// what is React.Fragement ?

/*
So in JSX we have a only one parent level  root so if we want 
to have multiple  root then how can we achieve it ?
 we can achieve that by React. fragement 
 React Fragement is nothing but a  empty tag that is the parent tag 
 and inside that we have  the other child tags so it satisfy JSX condition to have a
 one and only one parent tag .

*/
//For eg :
/*if we include without react.fragement we get error in JSX that 
we  should have one and only one root level parent .
"JSX expressions must have one parent element."
To overcome that   we have introduced React.Fragement 
*/
const Heading = () => (
  <React.Fragment>
    <div>
      <h1 className="heading">Hi There I am a heading</h1>
    </div>

    <div>
      <h1>HEY i am another div </h1>
    </div>
  </React.Fragment>
);

// What if i replaced </React.Fragment> with  this <> will it work ?
/* yes , it will work because the React fragement at the end of the day is 
empty tag.
So , the bottom example is equivalent to the above example .
*/

const Heading2 = () =>
(
    <> 
    <div>Hello I am heading 2</div>
    <div>Hello I am heading 3</div>
    </>
)


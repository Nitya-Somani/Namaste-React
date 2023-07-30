import React from "react";
import ReactDOM from "react-dom/client";

/* what i am going to build ? - "YummyTummy a food app"
  what components will i have in that ? -
    Header 
      - Logo 
      - Nav items 
    Body 
      -searchbar
      - Restaurants container 
        -Restaurant cards 
    footer 
      -Links, address 
      -copywright
      -contact
      
      render css with internal , inline and external in react 
      what is display:flex ? flex properties explaine 
*/

const Header = () => (
  <nav>
  <div>
    <img src="./YummyTummy.png" alt="logo" />
  </div>
</nav>

)


const App = () =>(
  <Header/>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);









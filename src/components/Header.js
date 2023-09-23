import { useState } from "react";
import { LOGO_URL } from "../utils/commonLinks";
import{Link} from "react-router-dom";


const Header = () => {
//whenever state variable update , react triggers a reconciliation cycle (re renders the component )
  const [toggleUserAuth,setToggleUserAuth] = useState("Login");
 
  return (
        <nav className="navbar navbar-expand-sm p-3 fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://tastyfood15.netlify.app/">
              <img src={LOGO_URL} alt="NS Logo" className="logo-img" style={{ width: "90px" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                {/* Never use anchor Link in react as it will load the complete page but i want it should only load the about component not the header so for this the react router-dom 
                gives us a super power component as Link which help us  to achieve that  
                link just refreshed the componets 
                that is why the react app is known as single page application 
                */}
                
                
                <li className="nav-item ps-5">                 
                  <Link to="/" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item ps-5">
                  
                  <Link to="/About" className="nav-link" >About </Link>
                </li>
                <li className="nav-item ps-5">
                
                  <Link  to="/Vision" className="nav-link">Vision </Link>
                </li>
                <li className="nav-item ps-5">
                  
                  <Link   to="/Contact" className="nav-link">Contact </Link>
                </li>
              </ul>
      
    
              <div className="dropdown nav-item">
                <button type="button" className="btn dropdown-toggle border-0" data-bs-toggle="dropdown">
                  <i className="fa-regular fa-user border border-3 border-dark rounded-circle"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-center">
                  <li><a className="dropdown-item" href="#">Register</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Contact</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" 
                  onClick={
                    ()=>(
                      toggleUserAuth==="Login"?setToggleUserAuth("Logout"):setToggleUserAuth("Login")  
                    )
                  }>{toggleUserAuth}</a>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
  



  )
}

export default Header;

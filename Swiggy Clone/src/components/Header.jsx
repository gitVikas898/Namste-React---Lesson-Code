import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

export const Header = () => {
  const status = useOnlineStatus()
  let [btnName ,setbtn] = useState(["Login"]);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            className="logo"
          ></img>
        </div>
  
        <div className="nav-items">
          <ul className="navs">
            <li>Online Status :{status? "🟢" : "🔴"}</li>
            <li>
              <Link to="/" className="nav-text">Home</Link>
            </li>
            <li>
               <Link to="/about"  className="nav-text">About Us</Link>
            </li>
            <li> 
               <Link to="/contact"  className="nav-text">Contact Us</Link>
            </li>
            <li> 
               <Link to="/grocery"  className="nav-text">Grocery</Link>
            </li>
            <li>
              <Link to="/cart"  className="nav-text">Cart</Link>
            </li>
            <li>
              <button className="login" onClick={()=>{
              btnName === "Login" ? setbtn("Logout") : setbtn("Login");
            }} >{btnName}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
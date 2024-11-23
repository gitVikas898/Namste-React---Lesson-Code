import { LOGO_URL } from "../utils/constants.js";
export const Header = () => {
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
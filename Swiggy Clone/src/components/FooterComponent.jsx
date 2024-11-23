import { GOOGLE_URL,APPLE_PLAY,LOGO_URL } from "../utils/constants.js";
export const FooterComponent = () => {
    return (
      <div className="footer-container">
        <div className="footer-header">
          <h1>For better experience,download the Myfood app now</h1>
          <img
            className="logo"
            src={GOOGLE_URL}
          ></img>
          <img
            className="logo"
            src={APPLE_PLAY}
          ></img>
        </div>
        <div className="footer-body">
          <div className="cols">
            <img
              src={LOGO_URL}
              className="logo"
            ></img>
            <p>©2024 Myfood limited</p>
          </div>
          <div className="cols">
            <h1>Company</h1>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="cols">
            <h1>Contact Us</h1>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="cols">
            <h1>Legal</h1>
            <ul>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="cols">
            <h1>Available in:</h1>
            <ul>
              <li>Bangalore</li>
              <li>Delhi</li>
              <li>Chennai</li>
            </ul>
          </div>
  
          <div className="cols">
            <h1>Social Links</h1>
            <ul>
              <li>Linked In</li>
              <li>X</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
import MainLogoFooter from "../Images/cabby-logo.png";
import SendButtonImg from "../Images/send-button.png";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={MainLogoFooter} alt="" />
          <span>
            We created our taxi to help you to findthe most dependable and
            highestquality taxi services, anytime andanywhere without any
            problems.
          </span>
        </div>
        <div>
          <span>Links</span>
          <ul>
            <li>About</li>
            <li>Get a Taxi</li>
            <li>Our Reviews</li>
            <li>Latest News</li>
          </ul>
        </div>
        <div>
          <span>Pages</span>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <span>Subscribe to Us</span>
          <p>
            Sign up now for our mailing list to get all latest newsand updates
            from conexi company.
          </p>
          <div>
            <input
              type="email"
              className="footer-input-email"
              placeholder="Enter your e-mail"
            />
            <a className="footer-send-button-email" href="#">
              <img src={SendButtonImg} alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright-container">
        <span>Cabby © 2021. All Rights Reserved.</span>
      </div>
    </div>
  );
};
export default Footer;

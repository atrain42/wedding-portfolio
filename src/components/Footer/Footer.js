import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footerbreak"></div>
      <h2>What's next?</h2>
      <h1>Reach out</h1>
      <p>
        Please fill out the contact form and I will get back with you ASAP.
        Please allow up to 48 hours for a response.
      </p>
      <Link to="/contact" className="contactBtn">
        contact
      </Link>

      <div className="copyright">
        {/* <div className=footerLinks}>
          <a href="https://github.com/atrain42">
            <img src={github} alt="github" className=dot} />
          </a>
          <a href="https://drive.google.com/file/d/1oy8PQTzikQGsmccPiPpcJpgXSm9RyMyz/view?usp=sharing">
            <img src={resume} alt="resume" className=mid} />
          </a>
          <a href="https://www.linkedin.com/in/austin-maxheimer-2ba1341b1/">
            <img src={linkedin} alt="linkedin" className=github} />
          </a>
          <a href="https://www.codewars.com/users/atrain42">
            <img src={codewars} alt="codewars" className=farright} />
          </a>
        </div> */}
        {/* <h1>Created by: Austin Maxheimer | React</h1> */}
      </div>
    </footer>
  );
};

export default Footer;

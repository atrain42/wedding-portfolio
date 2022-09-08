import { useRef } from "react";
import { useInView } from "framer-motion";
// import classes from "./Navbar.module.css";
import Navigation from "./Navigation";
// import MobileNavigation from "./MobileNavigation";

import "./Navbar.css";

import home from "../../img/home.png";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="nav active"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-30px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.15s",
      }}
    >
      <div className="navOverhang">
        <div className="homeButton">
          <img src={home} alt="logo" id="logo"></img>
        </div>
        <Navigation />
        {/* <MobileNavigation /> */}
      </div>
    </div>
  );
};

export default Navbar;

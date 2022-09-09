import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./Header.module.css";
import camera from "../img/camera.svg";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className={classes.header}>
      <div className={classes.headerText}>
        <div className={classes.headerHeading} ref={ref}>
          <div
            className={classes.linebreak}
            style={{
              transform: isInView ? "none" : "translateX(-70px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          ></div>
          <img
            src={camera}
            alt="camera"
            style={{
              transform: isInView ? "none" : "translateY(-70px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          />
          <div
            className={classes.linebreak}
            style={{
              transform: isInView ? "none" : "translateX(70px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          ></div>
        </div>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Lila Burch Photography
        </h1>
        <h2
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Weddings & Engagements
        </h2>
        <button
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Explore
        </button>
      </div>
    </header>
  );
};

export default Header;

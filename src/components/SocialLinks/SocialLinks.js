import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./SocialLinks.module.css";

import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import youtube from "../../img/youtube.svg";
import instagram from "../../img/instagram.svg";

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.socialLinks}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-75px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.15s",
      }}
    >
      <a href="https://www.facebook.com/">
        <img src={facebook} alt="codewars" className={classes.github} />
      </a>
      <a href="https://twitter.com/">
        <img src={twitter} alt="github" className={classes.github} />
      </a>
      <a href="https://www.youtube.com/">
        <img src={youtube} alt="resume" className={classes.github} />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagram} alt="linkedin" className={classes.github} />
      </a>
      <div className={classes.line}></div>
    </div>
  );
};

export default SocialLinks;

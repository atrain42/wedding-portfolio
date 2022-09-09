import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import "./Portfolio.css";
import { PortfolioHeading, AnimatedTextWord } from "../components";
import { motion } from "framer-motion";

import v1 from "../portfolio/v1.jpg";
import v2 from "../portfolio/v2.jpg";
import v3 from "../portfolio/v3.jpg";
import v4 from "../portfolio/v4.jpg";
import v5 from "../portfolio/v5.jpg";
import v6 from "../portfolio/v6.jpg";
import v7 from "../portfolio/v7.jpg";
import h1 from "../portfolio/h1.jpg";
import h2 from "../portfolio/h2.jpg";
import h3 from "../portfolio/h3.jpg";
import h4 from "../portfolio/h4.jpg";
import h5 from "../portfolio/h5.jpg";
import h6 from "../portfolio/h6.jpg";
import h7 from "../portfolio/h7.jpg";
import h8 from "../portfolio/h8.jpg";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="portfolioHeading" ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          Weddings
        </h1>

        <AnimatedTextWord text='"Love is passion, obsession, someone you cant live without." ' />

        <div className="pbreak"></div>
      </section>

      <div className="container">
        <div className="box">
          <div className="dream">
            <img src={h1} alt="portfolio" />
            <img src={v1} alt="portfolio" />
            <img src={v2} alt="portfolio" />
            <img src={h2} alt="portfolio" />
            <img src={h4} alt="portfolio" />
          </div>
          <div className="dream">
            <img src={v3} alt="portfolio" />
            <img src={v5} alt="portfolio" />
            <img src={h3} alt="portfolio" />
            <img src={v4} alt="portfolio" />
          </div>
          {/* <div className="dream">
          <img src={v5} alt="portfolio" />
          <img src={h5} alt="portfolio" />
          <img src={v6} alt="portfolio" />
          <img src={h6} alt="portfolio" />
        </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;

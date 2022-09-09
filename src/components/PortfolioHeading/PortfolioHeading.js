import { useRef } from "react";
import { useInView } from "framer-motion";

import "./PortfolioHeading.css";

const PortfolioHeading = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="portfolioHeading" ref={ref}>
      <h1
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {props.title}
      </h1>
      <p>{props.quote}</p>
      <div className="pbreak"></div>
    </section>
  );
};

export default PortfolioHeading;

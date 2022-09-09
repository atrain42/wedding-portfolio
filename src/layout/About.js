import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

import "./About.css";
import { AnimatedTextWord } from "../components";

import photographer from "../img/photgrapher.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="about">
      <div className="aboutContent">
        <div className="imageContainer">
          <img src={photographer} alt="Photographer"></img>
        </div>
        <div className="aboutText" ref={ref}>
          <h1>
            <AnimatedTextWord text="Capturing your" />
            <AnimatedTextWord text="wedding memories" />
          </h1>
          <p
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease-in",
            }}
          >
            Hi there, As absolute i by amounted repeated entirely ye returned.
            These ready timed enjoy might sir yet one since. Years drift never
            if could forty being no. On estimable dependent as suffering on my.
            Rank it long have sure in room what as he. Possession travelling
            sufficient yet our. On estimable dependent as suffering on my. Rank
            it long have sure in room what as he. Possession travelling
            sufficient yet our. Years drift never if could forty being no. On
            estimable dependent as suffering on my.
          </p>
          <Link to="/about">
            <button>Learn more &rarr;</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

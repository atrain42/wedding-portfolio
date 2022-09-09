import "./AboutPage.css";
import photographer from "../img/photgrapher.jpg";
import infinity from "../img/infinite.svg";
import { motion } from "framer-motion";
import { Reviews } from "../components";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="page-about">
        <div className="imageContainer">
          <img src={photographer} alt="Photographer"></img>
        </div>
        <div className="text-overhand">
          <div className="page-about-text">
            <h1>THIS IS ME</h1>
            <p>
              Hi, I'm Lila. Years drift never if could forty being no. On
              estimable dependent as suffering on my. Rank it long have sure in
              room what as he. Possession travelling sufficient yet our. On
              estimable dependent as suffering on my. Rank it long have sure in
              room what as he. Possession travelling sufficient yet our. Years
              drift never if could forty being no. On estimable dependent as
              suffering on my.
            </p>
          </div>
          <div className="about-numbers">
            <span>
              <h1>100+</h1> <h2>Weddings captured</h2>
            </span>
            <span>
              <h1>75+</h1> <h2>Engagements shot</h2>
            </span>
            <span>
              <h1>500+</h1> <h2>Happy customers</h2>
            </span>
            <span>
              <img src={infinity} alt="infinity" id="infinity" />{" "}
              <h2>Memories captured</h2>
            </span>
          </div>
        </div>
      </section>
      <Reviews />
      <Link to="/portfolio" className="end-link">
        <button className="end-btn">See my work</button>
      </Link>
    </motion.div>
  );
};

export default AboutPage;

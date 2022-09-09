import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolioGrid">
        <div className="portfolioText">
          <h1>Engagements</h1>
          <p>
            Want to to take engagements photos with your partner? I'm your girl.
            Check out some of my work and lets get to work!
          </p>
          <Link to="/portfolio">See my work</Link>
        </div>
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="portfolioText-deuce">
          <h1>Weddings</h1>
          <p>
            Let me capture the beautiful moments of your big day! I will help
            you remember your big day forever by capturing timeless photos
          </p>
          <Link to="/portfolio">See my work</Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

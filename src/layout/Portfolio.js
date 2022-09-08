import "./Portfolio.css";
import AnimatedTextWord from "../components/AnimatedTextWord";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolioGrid">
        <div>
          <h1>hello</h1>
          <AnimatedTextWord text="this is some paragraph text" />
        </div>
        <div className="img1"></div>
        <div className="img2"></div>
        <div>
          <h1>hello</h1>
          <p>thisissomeparagraphtext</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

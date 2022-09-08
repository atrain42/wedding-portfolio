import "./About.css";

import photographer from "../img/photgrapher.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="aboutContent">
        <div className="imageContainer">
          <img src={photographer} alt="Photographer"></img>
        </div>
        <div className="aboutText">
          <h1>Capturing your wedding memories</h1>
          <p>
            Hi there, As absolute is by amounted repeated entirely ye returned.
            These ready timed enjoy might sir yet one since. Years drift never
            if could forty being no. On estimable dependent as suffering on my.
            Rank it long have sure in room what as he. Possession travelling
            sufficient yet our. On estimable dependent as suffering on my. Rank
            it long have sure in room what as he. Possession travelling
            sufficient yet our. Years drift never if could forty being no. On
            estimable dependent as suffering on my.
          </p>
          <a href="/">Learn more &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default About;

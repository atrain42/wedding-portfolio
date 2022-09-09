import { Header, About, Portfolio, Testimonials } from "../layout";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Portfolio />
      <Testimonials />
    </div>
  );
};

export default Home;

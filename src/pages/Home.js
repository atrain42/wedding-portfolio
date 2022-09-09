import { Header, About, Portfolio } from "../layout";
import Questions from "../components/accordion/Questions";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Questions />
    </>
  );
};

export default Home;

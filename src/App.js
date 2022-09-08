import React from "react";
import { Header, About, Portfolio } from "./layout";
import { SocialLinks, FixedEmail, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <FixedEmail />
      <div className="wrapper">
        <SocialLinks />
        <Header />
        <About />
        <Portfolio />
      </div>
    </>
  );
}

export default App;

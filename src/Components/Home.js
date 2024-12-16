import React from "react";
import Header from "./header";
import Main from "./Main";
import Section from "./Section";
import CountdownSection from "./countdownsection";
import ReviewsContact from "./reviews";
const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <CountdownSection />
      <ReviewsContact />
    </div>
  );
};

export default Home;

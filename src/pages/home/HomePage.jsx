import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import VideoCard from "../../components/cards/VideoCard";
import FooterPrimary from "../../components/footers/FooterPrimary";
const HomePage = () => {
  return (
    <main className="home-page">
      <ReactFullpage
        //fullpage options
        navigation
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section bg-sec1 text-white vh-100 fp-tableCell"></div>
              <div className="section bg-sec2 text-white vh-100 fp-tableCell"></div>
              <div className="section bg-dark text-white vh-100 fp-tableCell">
                <VideoCard src="/assets/backgrounds/bg-hero.mp4" />
              </div>
              <div className="section bg-sec4 text-white vh-100 fp-tableCell"></div>
              <div className="section bg-sec5 text-white vh-100 fp-tableCell"></div>

              <div className="section bg-dark text-white">
                <FooterPrimary />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
};

export default HomePage;

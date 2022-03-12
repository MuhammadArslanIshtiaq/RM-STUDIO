import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
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
              <div className="section bg-sec1  vh-100 fp-tableCell"></div>
              <div className="section bg-sec2  vh-100 fp-tableCell"></div>
              <div className="section bg-light  vh-50 fp-tableCell">
                <div className="d-flex justify-content-center">
                  <video
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                    controls
                  >
                    <source
                      src="../../assets/backgrounds/bg-hero.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
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

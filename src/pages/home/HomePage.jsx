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
        scrollingSpeed={1000}
        responsiveWidth={1000}
        /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section bg-sec1 vh-100 fp-tableCell"></div>
              <div className="section container-fluid fp-auto-height-responsive">
                <div class="row">
                  <div className="col-md-12 col-lg-6 bg-sec2a vh-100 br-sec2"></div>
                  <div className="col-md-12 col-lg-6 bg-sec2b vh-100 bl-sec2"></div>
                </div>
              </div>
              <div className="section bg-light vw-100 fp-auto-height-responsive">
                <div className="d-flex justify-content-center align-items-center project">
                  <span class="full-bleed">
                    <video
                      poster="https://studio-rm.com/assets/videos/1080p_1440h_none.jpg"
                      src="../../assets/backgrounds/bg-hero.mp4"
                      muted="muted"
                      autoplay="autoplay"
                      playsinline=""
                      loop="loop"
                    ></video>
                  </span>
                </div>
              </div>
              <div className="section container-fluid fp-auto-height-responsive">
                <div class="row">
                  <div className="col-md-12 col-lg-6 bg-sec4a vh-100"></div>
                  <div className="col-md-12 col-lg-6 bg-sec4b vh-100"></div>
                </div>
              </div>
              <div className="section container-fluid fp-auto-height-responsive">
                <div class="row">
                  <div className="col-md-12 col-lg-6 bg-sec5a vh-100"></div>
                  <div className="col-md-12 col-lg-6 bg-sec5b vh-100"></div>
                </div>
              </div>

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

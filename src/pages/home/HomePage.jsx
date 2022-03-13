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
              <div className="section bg-sec1 vh-100 fp-tableCell"></div>
              <div className="section container-fluid">
                <div class="row bg-dark">
                  <div className="col-lg-12 col-xl-6 bg-sec2a vh-100"></div>
                  <div className="col-lg-12 col-xl-6 bg-sec2b vh-100"></div>
                </div>
              </div>
              <div className="section bg-light vw-100 fp-tableCell">
                <div className="d-flex justify-content-center align-items-center">
                  <video
                    poster="../../assets/backgrounds/video-bg.png"
                    src="../../assets/backgrounds/bg-hero.mp4"
                    muted="muted"
                    playsinline=""
                    loop="loop"
                    data-autoplay=""
                    className="myvideo"
                  ></video>
                </div>
              </div>
              <div className="section container-fluid">
                <div class="row">
                  <div className="col-lg-12 col-xl-6 bg-sec4a vh-100"></div>
                  <div className="col-lg-12 col-xl-6 bg-sec4b vh-100"></div>
                </div>
              </div>
              <div className="section container-fluid">
                <div class="row">
                  <div className="col-lg-12 col-xl-6 bg-sec5a vh-100"></div>
                  <div className="col-lg-12 col-xl-6 bg-sec5b vh-100"></div>
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

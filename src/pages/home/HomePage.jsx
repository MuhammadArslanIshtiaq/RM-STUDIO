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
              <div className="section">
                <div className="bg-sec1 vh-100 fp-tableCell d-none d-lg-block"></div>
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-01a.png"
                      className="img-fluid h-100"
                      alt="lol"
                    />
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="bg-sec2 vh-100 fp-tableCell d-none d-lg-block"></div>
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-02a.jpg"
                      className="img-fluid rounded mx-auto d-block"
                      alt="lol"
                    />
                  </div>
                </div>
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-02b.jpg"
                      className="img-fluid"
                      alt="lol"
                    />
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="bg-light vh-50 fp-tableCell d-none d-lg-block">
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
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-light vh-100 d-flex justify-content-center align-items-center">
                    <div class="embed-responsive embed-responsive-16by9">
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
                </div>
              </div>

              <div className="section">
                <div className="bg-sec4 vh-100 fp-tableCell d-none d-lg-block">
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
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-04a.jpg"
                      className="img-fluid"
                      alt="lol"
                    />
                  </div>
                </div>
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-04b.jpg"
                      className="img-fluid"
                      alt="lol"
                    />
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="bg-sec5 vh-100 fp-tableCell d-none d-lg-block">
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
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-05a.jpg"
                      className="img-fluid"
                      alt="lol"
                    />
                  </div>
                </div>
                <div className="container-fluid vh-100  d-md-block .d-lg-none">
                  <div className="bg-dark vh-100 d-flex justify-content-center">
                    <img
                      src="../../../assets/backgrounds/bg-section-05b.jpg"
                      className="img-fluid"
                      alt="lol"
                    />
                  </div>
                </div>
              </div>

              <div className="section bg-dark text-white ">
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

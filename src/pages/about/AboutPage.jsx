import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FooterPrimary from "../../components/footers/FooterPrimary";

const AboutPage = () => {
  return (
    <main className="about-page">
      <ReactFullpage
        //fullpage options
        navigation
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section bg-about vh-100 ">
                <div className="container-fullscreen">
                  <div className="text-middle text-center text-white">
                    <div className="container">
                      <h2 className="pt-5 dinBold">
                        This is about the democratization of luxury fashion
                        through digitization
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section py-5 bg-dark text-white vh-100">
                <div className="container py-5">
                  <div className="row m-b-30">
                    <div className="col-lg-12">
                      <h3 className="display-6 fw-bold din">
                        We are all just a bunch of showoffs.
                      </h3>
                      <h4 className="mb-4 display-7 din">
                        Whether it is in a subtle or flashy way, we all do it.
                      </h4>
                    </div>
                  </div>
                  <div className="row text-justify py-5">
                    <div className="col-lg-4 py-5">
                      <p className="">
                        Social media helped usher the advent of personal
                        branding on a scale never seen before.
                        <br />
                        <br />
                        All of a sudden, anyone with a phone and internet
                        connection could monetize their digital identities.
                        <br />
                        <br />
                        At the same time, we saw an explosion of “posers” —
                        people pretending to be someone they are not and
                        endorsing fake lifestyles in order to attract more
                        attention and garner more followers. These are part of
                        the web 2.0 inefficiencies.
                      </p>
                    </div>
                    <div className="col-lg-4 py-5">
                      <p className="">
                        With web 3.0, digital identities crafted with NFTs are
                        verifiable on the blockchain. One could not pose even if
                        they wanted to. ShowOff was created in satirical homage
                        to the interplay between the showoffs and posers.
                        <br />
                        <br />
                        Now, you can show off without worrying about the posers
                        trying to mimic their identities.
                        <br />
                        <br />
                        Through the ShowOff platform, we are redefining the
                        fashion economy and building the most comprehensive
                        digital fashion space.
                      </p>
                    </div>
                    <div className="col-lg-4 py-5">
                      <p className="">
                        Using our native $SHOW token to distribute revenue back
                        to our users and NFTs (Non- Fungible Tokens) to verify
                        digital ownership, we will create the most decentralized
                        and sustainable fashion-verse.
                        <br />
                        <br />
                        We hope to empower creatives and brands across the
                        ecosystem to create and use these digital assets to
                        transform the way we appreciate fashion in the
                        metaverse.
                        <br />
                        <br />
                        See you in ShowOff.
                      </p>
                    </div>
                  </div>
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

export default AboutPage;

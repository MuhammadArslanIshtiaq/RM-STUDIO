import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

const AboutPage = () => {
  const list = [
    { image: "1.jpg" },
    { image: "2.jpg" },
    { image: "3.jpg" },
    { image: "4.jpg" },
    { image: "5.jpg" },
    { image: "6.jpg" },
    { image: "1.jpg" },
    { image: "2.jpg" },
  ];

  return (
    <main className="about-page">
      <section
        className="min-vh-100 py-5 bg-cover"
        style={{
          backgroundImage: "url(/assets/backgrounds/bg-section-01.jpg)",
        }}
      >
        <div className="container-fullscreen">
          <div className="text-middle text-center text-white">
            <div className="container">
              <div
                className="heading-fancy-border p-4 mx-auto col-12 col-sm-10 col-md-6 col-xl-5 col-xxl-4"
                style={{ border: "0.8rem solid white" }}
              >
                <h1 className="text-lg display-2 fw-bold">STUDIO</h1>
                <hr className="py-1 px-4 bg-white opacity-100 d-lg-inline-block" />
                <h1 className="text-uppercase display-5 fw-bold">
                  SHOWOFF 2021/22
                </h1>
                <p className="lead">Empowering creatives and brands!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-dark text-white">
        <div className="container py-5">
          <div className="row m-b-30">
            <div className="col-lg-12">
              <h3 className="display-6 fw-bold">
                We are all just a bunch of showoffs.
              </h3>
              <h4 className="mb-4 display-7">
                Whether it is in a subtle or flashy way, we all do it.
              </h4>
            </div>
          </div>
          <div className="row text-justify py-5">
            <div className="col-lg-4 py-5">
              <p className="">
                Social media helped usher the advent of personal branding on a
                scale never seen before.
                <br />
                <br />
                All of a sudden, anyone with a phone and internet connection
                could monetize their digital identities.
                <br />
                <br />
                At the same time, we saw an explosion of “posers” — people
                pretending to be someone they are not and endorsing fake
                lifestyles in order to attract more attention and garner more
                followers. These are part of the web 2.0 inefficiencies.
              </p>
            </div>
            <div className="col-lg-4 py-5">
              <p className="">
                With web 3.0, digital identities crafted with NFTs are
                verifiable on the blockchain. One could not pose even if they
                wanted to. ShowOff was created in satirical homage to the
                interplay between the showoffs and posers.
                <br />
                <br />
                Now, you can show off without worrying about the posers trying
                to mimic their identities.
                <br />
                <br />
                Through the ShowOff platform, we are redefining the fashion
                economy and building the most comprehensive digital fashion
                space.
              </p>
            </div>
            <div className="col-lg-4 py-5">
              <p className="">
                Using our native $SHOW token to distribute revenue back to our
                users and NFTs (Non- Fungible Tokens) to verify digital
                ownership, we will create the most decentralized and sustainable
                fashion-verse.
                <br />
                <br />
                We hope to empower creatives and brands across the ecosystem to
                create and use these digital assets to transform the way we
                appreciate fashion in the metaverse.
                <br />
                <br />
                See you in ShowOff.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <LightGallery plugins={[lgZoom]} mode="lg-fade">
            {list.map((item) => (
              <a
                href
                data-lg-size="1406-1390"
                className="gallery-item px-0 cursor-pointer"
                data-src={`/assets/gallery/${item.image}`}
                data-sub-html="<div>
                <h4 className='mb-2 text-white'>
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className='mb-0 text-white text-opacity-25'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>"
              >
                <img
                  className="img-responsive d-block h-100 w-100"
                  src={`/assets/gallery/${item.image}`}
                  alt="..."
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

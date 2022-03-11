import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import VideoCard from '../../components/cards/VideoCard';
import FooterPrimary from '../../components/footers/FooterPrimary';
const HomePage = () => {
  return (
    <main className='home-page'>
      <ReactFullpage
        //fullpage options
        navigation
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section bg-dark text-white'>
                <VideoCard poster='/assets/backgrounds/bg-section-03.jpg' />
              </div>
              <div className='section bg-dark text-white'>
                <VideoCard poster='/assets/backgrounds/bg-section-02.jpg' />
              </div>
              <div className='section bg-dark text-white'>
                <VideoCard src='/assets/backgrounds/bg-hero.mp4' />
              </div>
              <div className='section bg-dark text-white'>
                <VideoCard poster='/assets/backgrounds/bg-section-01.jpg' />
              </div>
              <div className='section bg-dark text-white'>
                <VideoCard poster='/assets/backgrounds/bg-section-04.jpg' />
              </div>
              <div className='section bg-dark text-white'>
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

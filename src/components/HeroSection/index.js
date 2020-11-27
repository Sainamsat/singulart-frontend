import React, { useState } from 'react';
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Quote,
} from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { Button } from '../SignupButton';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Online platform for Artlovers</HeroH1>
        <HeroP>
          <Quote>
            Art washes away from the soul the dust of everyday life.
          </Quote>
          <br /> <br /> <i>- Pablo Picasso</i> <br />
          <br /> With us, you can escape your hectic bustling life and find a
          piece of yourself you didn't know was lost. Rediscover yourself with
          Art.
        </HeroP>
        <HeroBtnWrapper>
          
          {!localStorage.getItem('email') && 
            <Button
              to='/signup'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              exact='true'
            >
              Create an account {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

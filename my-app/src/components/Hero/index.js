import React,{useState} from 'react'
import {HeroBg,HeroContainer,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import Video from './videos/video.mp4'


function HeroSection() {

  const [hover,setHover] = useState();

  const onHover =()=> {
    setHover(!hover);
  }
  
  return (
  <HeroContainer>
    <HeroBg>
      <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
    </HeroBg>
    <HeroContent>
      <HeroH1>
        Virtual Banking Made Easy
      </HeroH1>
      <HeroP>
        Sign up today to avail exclusive credit card benefits.
      </HeroP>
  
    <HeroBtnWrapper>
    
     </HeroBtnWrapper>
    </HeroContent>
  </HeroContainer>
  )
}

export default HeroSection

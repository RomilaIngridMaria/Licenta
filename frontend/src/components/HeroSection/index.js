import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import Video from '../../videos/video.mp4'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src=
            {Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1> Handcrafted Photo Albums & much more </HeroH1>
            <HeroP>Hand Pressed. Hand bound. Hand Made. </HeroP>
            <HeroP>This is our story, what's yours?</HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary=""
                dark="">
                    Create now
                </Button>
            </HeroBtnWrapper>

        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
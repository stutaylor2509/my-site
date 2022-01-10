import React from 'react'
import { gsap, Expo, autoAlpha} from 'gsap'
import {useRef, useEffect } from 'react'
import Parallax from 'react-rellax'
import { Html5, Css3, Javascript, ReactLogo, Wordpress } from "@styled-icons/boxicons-logos"
import { Fiverr } from "@styled-icons/simple-icons"
import { Gatsby } from "@styled-icons/remix-fill"
import ContactButton from "../components/ContactButton"
import './Hero.css'

const Hero = () => {
    
        const boxRef = useRef(null);
        const contactBox = useRef(null);
      
        useEffect(() => {
          gsap.from(boxRef.current, 1.4, { bottom:"-100%", opacity:"0", delay:0.5, ease: Expo.easeInOut, autoAlpha: 0 });
          gsap.from(contactBox.current, 1.4, { opacity:"0", delay:2, ease: Expo.easeInOut, autoAlpha: 0 });
        });

return (
<section className="hero">
    <Parallax speed={-3}>
     <div>
  <div className="head-container">
  <h1 ref={boxRef} className="head">
  <span className="underline">sdott81</span></h1>
  </div>
  <div ref={contactBox} className="contactBox">
  <h3>Frontend web<br />Custom wordpress themes<br />Digital marketing consultancy</h3>
  <p className="logos"><Html5 /><Css3 /><Javascript /><ReactLogo /><Wordpress /><Gatsby /><a href="https://www.fiverr.com/sdott81" aria-label="Fiverr"><Fiverr /></a></p>
  <ContactButton />
  </div>

  </div> 
  </Parallax>

        
    </section>
 
    )

}

export default Hero



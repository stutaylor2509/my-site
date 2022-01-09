import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Parallax from 'react-rellax'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className="about-me">
    <div className='container grid'>
    <div className='pad-top'>    <Parallax speed={2}>
<h2>About Me</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla neque quibusdam tenetur perspiciatis eos, itaque nam voluptate aut odio libero similique sunt assumenda commodi incidunt ipsam illo id maxime!</p>
</Parallax>
</div>                
    <div className="right-align">
     <StaticImage
      src="../images/stu.jpeg"
      width={400}
      formats={["auto", "webp", "avif"]}
      alt="Stu"
      className="shadow"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
    </div>
        </section>
    )
}

export default AboutMe

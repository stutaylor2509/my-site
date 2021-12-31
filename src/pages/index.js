import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import HomeVideo from "../images/flames.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    
    <Seo title="Home" />
   
    <section className="hero">
     <div className="clip--container">
    <video autoPlay muted loop playsInline>
      <source src={HomeVideo} type="video/mp4" />
      
    </video>
    <svg viewBox="0 0 0.82 1">
        <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="mask">
            <path class="cls-1" d="M308.45,452.73h.24a.16.16,0,0,0,.19.17c.12,0,.15-.06.15-.1,0-.2-.57,0-.57-.41,0-.15.09-.3.4-.3s.4.15.4.34H309c0-.08,0-.14-.17-.14s-.14,0-.14.08.56,0,.56.42c0,.14-.07.3-.41.3S308.45,453,308.45,452.73Z" transform="translate(-308.45 -452.09)"/>
            </clipPath>
        </defs>
        </svg>
        </div> 
        <div className="col"><h2>Web | Design | Digital Marketing</h2></div>
    </section>
  </Layout>
)

export default IndexPage

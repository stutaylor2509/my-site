import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HomeVideo from "../images/splash.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    
    <Seo title="Home" />
   
    <section>
     <div class="clip--container">
    <video autoPlay muted loop>
      <source src={HomeVideo} type="video/mp4" />
    </video>
    <svg width={0} height={0}>
        <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="mask">
                <path class="cls-1"  d="M 0.0078125 0.640625 L 0.300781 0.640625 C 0.304688 0.738281 0.351562 0.804688 0.519531 0.804688 C 0.671875 0.804688 0.707031 0.753906 0.707031 0.707031 C 0.707031 0.507812 0.0273438 0.671875 0.0273438 0.296875 C 0.0273438 0.144531 0.136719 0 0.503906 0 C 0.871094 0 0.972656 0.144531 0.980469 0.34375 L 0.6875 0.34375 C 0.683594 0.261719 0.652344 0.195312 0.492188 0.195312 C 0.355469 0.195312 0.320312 0.242188 0.320312 0.28125 C 0.320312 0.460938 0.992188 0.308594 0.992188 0.695312 C 0.992188 0.835938 0.902344 1 0.503906 1 C 0.140625 1 0.0078125 0.863281 0.0078125 0.640625 Z M 0.0078125 0.640625"/>
            </clipPath>
        </defs>
        </svg>
        </div> 
    </section>
  </Layout>
)

export default IndexPage

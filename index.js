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
    <svg viewBox="0 0 100 100">
        <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="mask">
                <path class="cls-1" d="M0,.64H.24A.16.16,0,0,0,.43.81C.55.81.59.75.59.71.59.51,0,.67,0,.29,0,.15.11,0,.41,0s.4.15.4.34H.57C.57.26.54.19.4.19S.26.24.26.28.82.31.82.69C.82.83.75,1,.41,1S0,.86,0,.64Z"/>
            </clipPath>
        </defs>
        </svg>
        </div> 
    </section>
  </Layout>
)

export default IndexPage

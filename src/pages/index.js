import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HomeVideo from "../images/ocean.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    
    <Seo title="Home" />
   
    <section class="splash">
    <video autoPlay muted loop>
      <source src={HomeVideo} type="video/mp4" />
    </video>
    <div class="hero-box"><h1 class="hero">S.81</h1></div>
    </section>
  </Layout>
)

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    
    <Seo title="Home" />
    
    <section class="splash">
    <h1 class="hero">sdott81</h1>
    <p>My portfolio and blog built with React/Gatsby</p>
    </section>
  </Layout>
)

export default IndexPage

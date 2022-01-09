import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
const IndexPage = () => (


  <Layout>
    
    <Seo title="Home" />
   
    <Hero />
    <AboutMe />

<BlogCard />
  </Layout>
)


export default IndexPage
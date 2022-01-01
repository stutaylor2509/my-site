import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactButton from "../components/ContactButton"
import Parallax from 'react-rellax'
import { Html5, Css3, Javascript, ReactLogo, Wordpress } from "@styled-icons/boxicons-logos"
import { Fiverr } from "@styled-icons/simple-icons"
import { Gatsby } from "@styled-icons/remix-fill"
import { Link } from "gatsby"


const IndexPage = () => (

  <Layout>
    
    <Seo title="Home" />
   
    <section className="hero">
    <Parallax speed={-3}>
     <div>
  

    <h1><span class="underline">sdott81</span></h1>
  
  <h3>Frontend web<br />Custom wordpress themes<br />Digital marketing consultancy</h3>
  <p className="logos"><Html5 /><Css3 /><Javascript /><ReactLogo /><Wordpress /><Gatsby /><Link to="https://www.fiverr.com/sdott81"><Fiverr /></Link></p>
  <ContactButton></ContactButton>
  </div> 
  </Parallax>

        
    </section>
    
  </Layout>
)

export default IndexPage
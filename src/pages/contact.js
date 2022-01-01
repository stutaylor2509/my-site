import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <section className="margin--top">
    <div className="container two--col">
    <Seo title="Contact me" />
    <div className="col">
      <h3>Contact me</h3>
      <p>If you are looking to have a design turned in to a wordpress theme or a static website build or after consultancy/assistance on digital marketing complete the form and I will be in touch with you.</p>
    </div>
    <div className="col">
  <form method="post" action="https://getform.io/f/fda81801-6ae5-4428-a909-64ddd61fff50">
  <div className="form">
  <label>
    <input type="text" name="name" id="name" placeholder="Name"/>
  </label>
  <label>
    <input type="email" name="email" id="email" placeholder="Email Address"/>
  </label>
  <label>
    <input type="text" name="subject" id="subject" placeholder="Subject" />
  </label>
  <label>
    <textarea name="message" id="message" rows="5" placeholder="Message" />
  </label>
  </div>
  
  <button type="submit" className="button">Send</button>
  
</form>
    </div>
    </div>
    </section>
  </Layout>
)

export default ContactPage

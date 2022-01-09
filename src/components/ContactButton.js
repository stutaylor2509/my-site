import * as React from "react"
import { Link } from "gatsby"
import './ContactButton.css'

const ContactButton = () => {
    return (
    <Link to="/contact" className="button">Contact Me</Link>
    )
}

export default ContactButton

import React from 'react'
import { Link } from 'gatsby'
import { BlogQuery } from '../hooks/BlogQuery'
import './BlogCard.css'
import { StaticImage } from "gatsby-plugin-image"

const BlogCard = () => {
  
  const data = BlogQuery();
  console.log(data);


  return(
  <section className="second"> 
  <div className="container">
  
  <h2>Latest</h2>
  <div className="grid-container">

  {data.allWpPost.edges.map(({node}) => (
  
  <article>

<h4>{node.title}</h4>
<img src={node.featuredImage.node.localFile.childImageSharp.fluid.src} width="500px" alt="blog image"/>
<p dangerouslySetInnerHTML={{ __html: node.excerpt}}/>
  <Link className="readmore" to={`/blog${node.uri}`}>
  <p>Read More...<span className="linkbox"></span></p>
  </Link>
  </article>
  ))}
  </div>
  
  </div> 
  </section>
  );
}

export default BlogCard;

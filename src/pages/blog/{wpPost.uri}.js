import React from 'react'
import { graphql } from 'gatsby'

const PostTemplate = ({ data }) => {

    return (
        <article>

          <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.post.content }} />


        </article>
    )
}

export default PostTemplate


export const pageQuery = graphql`
  query($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`

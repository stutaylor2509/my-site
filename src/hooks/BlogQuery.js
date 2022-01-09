import { useStaticQuery, graphql } from 'gatsby'

export const BlogQuery = () => {
     const data = useStaticQuery(graphql`
    
     query MyQuery {
      allWpPost {
        edges {
          node {
            title
            uri
            id
            excerpt
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
    
    `)
    return data
}

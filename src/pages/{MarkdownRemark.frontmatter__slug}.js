import { graphql } from 'gatsby'
import React from 'react'

const BlogsPage = ({data}) => {
  console.log(data);
  const bData = data.markdownRemark
    return (
      <div className="blogs__page_container">
        <h1>{bData.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: bData.html}}></div>
      </div>
    )
}

export default BlogsPage

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        
      }
    }
  }
`

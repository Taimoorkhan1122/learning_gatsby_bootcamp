import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import  {getImage, GatsbyImage, StaticImage} from 'gatsby-plugin-image';
const post = ({pageContext}) => {
    console.log("loging here --->", pageContext)
    const image = getImage(pageContext.coverImage);
    return (
      <div>
          <h2>{pageContext.title}</h2>
          <GatsbyImage image={image} alt={pageContext.coverImage?.description}/>
        <div>{documentToReactComponents(JSON.parse(pageContext.content.raw))}</div>
      </div>
    )
}

export default post

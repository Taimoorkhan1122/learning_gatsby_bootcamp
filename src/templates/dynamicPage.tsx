import React from 'react'

const dynamicPage = ({pageContext}) => {
    return (
        <div>
            <h2>Dynamic page created using gatsby by {pageContext.name}</h2>
            <p>{pageContext.description}</p>
        </div>
    )
}

export default dynamicPage

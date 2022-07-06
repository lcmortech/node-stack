import React from 'react'
import Link from 'gatsby-link'

export default () => {
    return (
        <div style={{color: 'tomato'}} >
            <h1>Page 2</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/dir1/page-3">Page 3</Link>
        </div>
    )
}
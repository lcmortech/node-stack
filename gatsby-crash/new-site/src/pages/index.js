import React from "react"
import Link from "gatsby-link"

export default function Home() {
  return (
  <div>
    <h1>Hello world!</h1>
    <h2>What's happenin'!</h2>
    <Link to="/page-2/">Page 2</Link><br />
    <Link to="/dir/page-3/">Page 3</Link><br />
    <Link to="/counter/">Counter</Link>
  </div>
  )
}

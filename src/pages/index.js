import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [funcData, setfuncData] = React.useState("")
  React.useEffect(() => {
    (async() => {
      const fetchNf = await fetch(`.netlify/functions/echo`);
      const res = await fetchNf.json();
      setfuncData(res)
    })()
  },[])
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{funcData.message}</p>
      <p>
        by {funcData?.data?.clientContext.name} - Updated at{" "}
        {funcData?.data?.clientContext.time}
      </p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

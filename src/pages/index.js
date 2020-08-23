import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql,StaticQuery} from "gatsby"
import Posts from "../components/Posts"
import{Row,Col} from 'reactstrap'
import Sidebar from '../components/Sidebar'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <Row>
      <Col md="8">
      <StaticQuery query={indexQuery} render={data =>{
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({node})=>{
            return (
              <Posts title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    path={node.frontmatter.path}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
              />
            )
          })}
        </div>
      )
    }}/>
      </Col>
      <Col md="4">
        <Sidebar/>
      </Col>
    </Row>
  </Layout>
)

 const indexQuery =graphql`
 query{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM DD YYYY ")
          author
          path
          tags
          image{
            childImageSharp{
              fluid(maxWidth:800){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}`

export default IndexPage

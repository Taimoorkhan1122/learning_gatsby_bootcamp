exports.createPages = async ({ actions, graphql }) => {
  actions.createPage({
    path: "dynamic-page",
    component: require.resolve(`./src/templates/dynamicPage.tsx`),
    context: {
      name: "Taimoor khan",
      description: "Hey this won't show up until update",
    },
  })

  const query = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
            title
            updatedAt(formatString: "MM-DD-YYYY")
            content {
              raw
            }
            coverImage {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED  
                resizingBehavior: FILL
              )
              description
            }
          }
        }
      }
    }
  `)
  const posts = query.data.allContentfulBlog.edges;
  posts.map(post => {
    actions.createPage({
      path: post.node.slug,
      component: require.resolve(`./src/templates/post.tsx`),
      context: post.node,
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/app/i)) {
    page.matchPath = "/app/*"

    actions.createPage(page)
  }
}

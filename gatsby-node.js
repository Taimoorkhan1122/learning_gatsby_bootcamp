exports.createPages = async ({actions}) => {
    actions.createPage({
        path: "dynamic-page",
        component: require.resolve(`./src/templates/dynamicPage.tsx`),
        context: {
            name: 'Taimoor khan',
            description: "Hey this won't show up until update"
        }
    })
}

exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/app/i)) {
    page.matchPath = "/app/*"

    actions.createPage(page)
  }
}
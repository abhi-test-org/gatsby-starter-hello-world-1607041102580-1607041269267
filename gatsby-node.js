const fs = require("fs-extra")

exports.createPages = ({ _graphql, actions: { createRedirect } }) => {
  // Removed support page in favor of contact us
  createRedirect({
    fromPath: `/about/`,
    toPath: `/about-2/`,
    isPermanent: true,
    force: true,
  })
}

exports.onPostBuild = async () => {
  await fs.copy("./functions", "./public/functions")

  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}

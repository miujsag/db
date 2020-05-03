const { fs } = require("mz");
const path = require("path");
const { ArticleSelector, Site } = require("../../../models");

async function seed() {
  try {
    const filePath = path.join(__dirname, "data.json");
    const data = await fs.readFile(filePath);
    const sites = JSON.parse(data);
    const newSites = [];

    for (const site of sites) {
      const newSite = await Site.create(site);
      const newArticleSelector = await ArticleSelector.create({
        ...site.selectors.article,
        site: newSite.id,
      });

      newSites.push(newSite);
    }

    console.log(`${newSites.length} sites successfully created.`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = seed;

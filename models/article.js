const readingTime = require("reading-time");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "Article",
    {
      title: DataTypes.TEXT,
      url: DataTypes.TEXT,
      description: DataTypes.TEXT,
      html: DataTypes.TEXT,
      content: DataTypes.TEXT,
      published_at: DataTypes.DATE,
      extracted: DataTypes.BOOLEAN,
      estimated_read_time: DataTypes.INTEGER,
      author: DataTypes.STRING,
      image: DataTypes.TEXT,
      category: DataTypes.INTEGER,
      site: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeSave(article) {
          article.title = removeTags(article.title);

          if (article.description) {
            article.description = removeTags(article.description);
          }

          if (article.content) {
            article.content = removeTags(article.content);
            article.estimated_read_time = getReadingTime(article.content);
          }
        },
      },
    }
  );
  return articles;
};

function getReadingTime(content) {
  if (!content) return undefined;

  return Math.round(readingTime(content).time);
}

function removeTags(text) {
  return text ? text.replace(/<(?:.|\n)*?>/gm, "").trim() : "";
}

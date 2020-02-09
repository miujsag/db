'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    html: DataTypes.TEXT,
    content: DataTypes.TEXT,
    published_at: DataTypes.DATE,
    extracted: DataTypes.BOOLEAN,
    estimated_read_time: DataTypes.INTEGER,
    keywords: DataTypes.ARRAY,
    authors: DataTypes.ARRAY,
    image_url: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      field: 'category_id'
    },
    siteId: {
      type: DataTypes.INTEGER,
      field: 'site_id'
    }
  }, {
    hooks: {
      beforeSave (article) {
        article.title = removeTags(article.title)
  
        if (article.description) {
          article.description = removeTags(article.description)
        }
  
        if (article.content) {
          article.content = removeTags(article.content)
          article.estimated_read_time = getReadingTime(article.content)
        }
      }
    }
  });


  Article.associate = function(models) {
    // associations can be defined here
  };
  
  return Article;
};

function getReadingTime (content) {
  if (!content) return undefined

  return Math.round(readingTime(content).time)
}

function removeTags (text) {
  return text ? text.replace(/<(?:.|\n)*?>/gm, '').trim() : ''
}
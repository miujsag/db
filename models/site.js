'use strict';
module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    url: DataTypes.STRING,
    state: DataTypes.ENUM,
    feed: DataTypes.STRING
  }, {});

  Site.associate = function(models) {
    models.Article.belongsTo(Site, {
      foreignkey: 'site_id', as: 'site_id'
    })
    models.ArchiveSelector.belongsTo(Site, {
      foreignkey: 'site_id', as: 'site_id'
    })
    models.ArticleSelector.belongsTo(Site, {
      foreignkey: 'site_id', as: 'site_id'
    })

    Site.hasMany(models.Article)
    Site.hasOne(models.ArchiveSelector)
    Site.hasOne(models.ArticleSelector)
  };
  return Site;
};
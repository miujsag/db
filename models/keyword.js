("use strict");
module.exports = (sequelize, DataTypes) => {
  const keywords = sequelize.define("Keyword", {
    word: DataTypes.TEXT,
    type: DataTypes.STRING,
    stem: DataTypes.TEXT,
  });
  return keywords;
};

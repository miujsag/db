("use strict");
module.exports = (sequelize, DataTypes) => {
  const keywords = sequelize.define("Keyword", {
    phrase: DataTypes.TEXT,
  });
  return keywords;
};

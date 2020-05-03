const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    timezone: "Europe/Budapest",
    /* logging: console.log, */
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
/* init: async (opts) => {
    await sequelize.authenticate();
    require("../models/sites")(sequelize, DataTypes);
    require("../models/article_selectors")(sequelize, DataTypes);
    require("../models/categories")(sequelize, DataTypes);
    require("../models/articles")(sequelize, DataTypes);
    require("../models/days")(sequelize, DataTypes);
    require("../models/banks")(sequelize, DataTypes);
    require("../models/rates")(sequelize, DataTypes);
    require("../models/weather")(sequelize, DataTypes);
    await sequelize.sync(opts);
    return sequelize;
  }, */

/* init () {
    require("../models/sites")(sequelize, DataTypes);
    require("../models/article_selectors")(sequelize, DataTypes);
    require("../models/categories")(sequelize, DataTypes);
    require("../models/articles")(sequelize, DataTypes);
    require("../models/days")(sequelize, DataTypes);
    require("../models/banks")(sequelize, DataTypes);
    require("../models/rates")(sequelize, DataTypes);
    require("../models/weather")(sequelize, DataTypes);
  }

  getInstance: () => sequelize, */

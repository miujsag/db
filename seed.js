const { seed } = require("./lib/seed");

seed().finally(console.log("seed finished"));

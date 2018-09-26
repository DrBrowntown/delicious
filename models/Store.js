const mongooose = require("mongoose");
mongooose.Promise = global.Promise;
const slug = require("slugs");

const storeSchema = new mongooose.Schema({});

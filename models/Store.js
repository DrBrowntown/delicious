const mongooose = require("mongoose");
mongooose.Promise = global.Promise;
const slug = require("slugs");

const storeSchema = new mongooose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a store name"
  },
  slug: String,
  description: {
    type: string,
    trim: true
  },
  tags: [String]
});

module.exports = mongoose.model("Store", storeSchema);

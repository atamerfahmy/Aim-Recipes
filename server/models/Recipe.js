const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
     title: {
          type: String,
          unique: true
     },
     ingredients: {
          type: String,
          default: ""
     },
     recipe: {
          type: String,
          default: ""
     },
     photo: {
          url: {
               type: String,
               required: false
          },
          fileId: {
               type: String,
               required: false
          }
     },
});

module.exports = Recipe = mongoose.model("Recipe", RecipeSchema);

const Recipe = require("../models/Recipe");
const publicKey = require('../config/keys').IKPublicKey;
const privateKey = require('../config/keys').IKPrivateKey;
const urlEndpoint = require('../config/keys').IKUrlEndpoint;

var ImageKit = require("imagekit");
var imagekit = new ImageKit({
     publicKey,
     privateKey,
     urlEndpoint
});

// exports.getAll = async (req, res) => {

//      try {

//      } catch (error) {
          // res.status(400);
          // res.send({ error: error.message.toString() });
//      }
// }

exports.create = async (req, res) => {
     try {
          let files = req.files;
          req.body = req.body.json ? JSON.parse(req.body.json) : req.body
          const { title, ingredients, recipe } = req.body;

          if (!title || !ingredients || !recipe) {
               res.status(400);
               return res.json({
                    error: "Please fill all data"
               });
          }

          let newRecipe = await Recipe.create(req.body);

          if (files && files.photo) {
               for (const [i, file] of files.photo.entries()) {
                    const encoded = file.buffer.toString('base64')
                    const response = await imagekit.upload({
                         file: encoded,
                         fileName: `${newRecipe._id}${file.fieldname}${i}.jpg`,
                    })
                    let imageObject = { url: response.url, fileId: response.fileId };
                    let photo = imageObject;
                    newRecipe = await Recipe.findByIdAndUpdate(newRecipe._id, { photo }, { new: true });
               }
          }
          return res.json({
               data: newRecipe
          })
     } catch (error) {
          res.status(400);
          res.send({ error: error.message.toString() });
     }
}

exports.getAll = async (req, res) => {

     try {
          let recipes = await Recipe.find({});
          return res.json({
               data: recipes
          })

     } catch (error) {
          res.status(400);
          res.send({ error: error.message.toString() });
     }
}

exports.getRecipe = async (req, res) => {

     try {
          let recipe = await Recipe.findById(req.params.id);
          return res.json({
               data: recipe
          })

     } catch (error) {
          res.status(400);
          res.send({ error: error.message.toString() });
     }
}

exports.editRecipe = async (req, res) => {

     try {
          let id = req.params.id;
          
          let updatedRecipe = await Recipe.findByIdAndUpdate(id, { ...(req.body)}, { new: true });

          return res.json({
               data: updatedRecipe
          })
     } catch (error) {
          res.status(400);
          res.send({ error: error.message.toString() });
     }
}

exports.deleteRecipe = async (req, res) => {

     try {
          let id = req.params.id;
          
          let deletedRecipe = await Recipe.findByIdAndDelete(id);

          return res.json({
               data: deletedRecipe
          })
     } catch (error) {
          res.status(400);
          res.send({ error: error.message.toString() });
     }
}
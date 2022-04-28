const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const uploadFormat = upload.fields([{ name: 'photo' }, { name: 'json' }]);

const recipeController = require('../controllers/recipeController');

router.post("/createRecipe", uploadFormat, recipeController.create);

router.get("/getAll", recipeController.getAll);
router.get("/getRecipe/:id", recipeController.getRecipe);

router.patch("/editRecipe/:id", recipeController.editRecipe);
router.delete("/deleteRecipe/:id", recipeController.deleteRecipe);

module.exports = router;
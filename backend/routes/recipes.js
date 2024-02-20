const express = require("express");

const router = express.Router();

// GET all recipes
router.get("/", getRecipes);

// GET a recipe
router.get("/:id", getRecipe);

// POST a new recipe
router.post("/", createRecipe);

// DELETE a recipe
router.delete("/:id", deleteRecipe);

// UPDATE a recipe
router.patch("/:id", updateRecipe);

module.exports = router;
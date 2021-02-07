const express = require('express');
const db = require('./model');

const router = express.Router;

router.get('/', async (req, res) => {
    try {
        const recipes = await db.getRecipes();
        res.status(200).json(recipes)
    } catch (err) {
        res.status(500).json({ message: "could not retrieve recipes" })
    }
});

router.get('/:id/shoppingList', async (req, res) => {
    try {
        const { id } = req.params;
        const shoppingList = await db.getShoppingList(id);
        if (shoppingList) {
            res.status(200).json(shoppingList);
        } else {
            res.status(404).json({ message: "specified id does not exist" });
        }
    } catch (err) {
        res.status(500).json({ message: "could not retrieve shopping list" })
    }
});

router.get('/:id/instructions', async (req, res) => {
    try {
        const { id } = req.params;
        const instructions = await db.getInstructions(id)
        if (instructions) {
            res.status(200).json(instructions)
        } else {
            res.status(404).json({ message: "specified id does note exist" })
        }
    } catch (err) {
        res.status(500).json({ message: "could not retrieve instructions" })
    }
});

module.exports = router;
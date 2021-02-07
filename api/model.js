const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri')
        .select('i.ingredients', 'quantity')
        .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .where('recipe_id', '=', recipe_id);
};

function getInstructions(recipe_id) {
    return db('instructions as i')
        .select('s.steps')
        .join('steps as s', 'i.id', 's.instructions_id')
        .where('i.recipe_id', '=', recipe_id);
}
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};
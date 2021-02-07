
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient').notNullable()
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.float('quantity').notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('instructions_id').unsigned().notNullable().references('instructions.id').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.string('step').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes')
};

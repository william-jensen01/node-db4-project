exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('ingredients').insert([
      { id: 1, ingredient: "1 cup flour" },
      { id: 2, ingredient: "1 oz water" },
      { id: 3, ingredient: "2/3 cup sugar" },
    ]);
};

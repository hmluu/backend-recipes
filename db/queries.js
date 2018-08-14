const knex = require('./knex');
//bringing the connection not requiring knex

module.exports = {
  getAllRecipes(query){ 
    const knexQuery = knex('recipes');
    if(query.title) {
      knexQuery.where('title', 'like', `%${query.title}%`);
    }
    return knexQuery;
  },
  getOne(id){
    return knex('recipes').where('id', id).first();
  },
  create(recipe){
    return knex('recipes').insert(recipe, '*');
  },
  update(id, recipe) {
    return knex('recipes').where('id', id).update(recipe, '*');
  },
  delete(id) {
    return knex('recipes').where('id', id).del();
  }
}
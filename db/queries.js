const knex = require('./knex');
//bringing the connection not requiring knex

module.exports = {
  getAllRecipes(){
    return knex('recipes');
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
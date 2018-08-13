// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/recipe_tracker'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

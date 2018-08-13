
const config = require('config')

module.exports = {
  "type": config.get('database.type'),
  "host": config.get('database.host'),
  "port": config.get('database.port'),
  "username": config.get('database.username'),
  "password": config.get('database.password'),
  "database": config.get('database.database'),
  "synchronize": config.get('database.synchronize'),
  "logging": "all",
  "logger": "debug",
  "entities": [
    "src/entity/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  "migrations": [
    "src/migration/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  },
  cache: false
}

* how to run:
  ```
    npm install
  ```
  - create a _knexfile.js_ with your database config.
  
    template:
    ```
      module.exports = {
        client: "",
        connection: {
          database: "apiContato",
          user: "",
          password: "",
        },
        pool: {
          min: 2,
          max: 10,
        },
        migrations: {
          tableName: "knex_migrations",
          directory: "./src/db/migrations",
        },
      };
    ```

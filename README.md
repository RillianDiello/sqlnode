# MySQL com NODE + Sequelize

The purpose of this small project is to demonstrate a way to configure the MySQL database in a NodeJS project using the Sequelize ORM.

It's important to note that both Node.js and Sequelize have numerous other features that haven't been explored at this time.

# Configuracão do Sequelize do Banco de Dados

Regarding the database configuration, I used MySQL with its default settings along with Dotenv. As for Sequelize, it was necessary to create a .sequelizerc file where the directories that would receive the results of command execution were configured.

For example, when configuring in the .sequelizerc `"migrations-path": path.resolve(__dirname, "src", "database", "migrations")`, we are indicating that the migrations will be saved in a directory `src/database/migrations`.
The same was done for the Models, although I chose to build the models manually.

# Using the Sequelize

Sequelize is an ORM that offers various functions. Use the command below to get the list of available commands:

```bash
$ npx sequelize -h
```

## Creating a Database

This command will read the settings from .sequelizerc and create the database in the specified location.

```bash
$ npx sequelize db:create
```

## Criando uma migration

Similar to the previous command that identified the database to be created based on the configurations, the following command will create migrations in the folder configured in the file: `.sequelizerc`:

```bash
$ npx sequelize migration:create --name=name-migration
```

With the execution of this command, a migrations file will be created following the **Up** and **Down** logic. This file should be manipulated according to the logic your table will have.

For example:

```javascript
await queryInterface.createTable("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
```

This command indicates the creation of a "users" table with the "id" column as an **INTEGER** type and **primaryKey**, and another "name" column as a **STRING** type.

After creating the migration, you should apply the migration to your database:

```bash
$ npx sequelize db:migrate
```

This command will apply all changes that haven't been applied to your database yet. If you need to revert something, execute:

```bash
$ npx sequelize db:migrate:undo
```

# Models

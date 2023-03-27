# Ahamazon MSSQL Seeding

This is a repository containing scripts to test migration and seeding of an MSSQL database.

## 🛠 Setup 

1. Install npm packages

```sh
npm install
```

2. Create a config folder and file for database configurations

```sh
mkdir config && touch ./config/config.js
```

3. Fill in config file (`./config/config.js`) with necessary DB credentials. An example is shown below.

```js
require('dotenv').config();

module.exports = {
  "development": {
    "username": "username",
    "password": "password",
    "database": "db_development",
    "host": "127.0.0.1",
    "dialect": "mssql",
    "define": {
      "timestamps": false
    }
  },
  "test": {
    "username": "SA",
    "password": "password",
    "database": "db_test",
    "host": "127.0.0.1",
    "dialect": "mssql",
    "define": {
      "timestamps": false
    }
  },
  "production": {
    "username": "username",
    "password": "password",
    "database": "db",
    "host": "127.0.0.1",
    "dialect": "mssql",
    "define": {
      "timestamps": false
    }
  }
}
```

## 👨‍💻 Migrations
1.  Edit the files in the `migrations` folder or create new migrations with 
   
```sh
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
2. To migrate, run the following command
```sh
npm run migrate
```
3. To undo migrations, run the following command

```sh
npm run unmigrate
```

## 🌱 Seeds
1. To seed database, edit the files in the `seed` folder or create new seeds with 
```
npx sequelize-cli seed:generate --name demo-user
```
2. To seed, run the following command
```
npm run seed
```
3. To unseed the database, run the following command
```
npm run unseed
```
4. To reseed the database, run the following command
```
npm run reseed
```

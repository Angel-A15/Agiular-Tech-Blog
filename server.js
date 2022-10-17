const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');


const routes = require('./routes');
const sequelize = require('./config/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use('./constrollers/');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
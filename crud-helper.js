// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const profileModel = require('./models/profileModel');
// const Category = require('./models/category');
// const Order = require('./models/order');


// Local variables will come in handy for holding retrieved documents
let user, profileModel, category, order;
let users, profileModels, categories, orders;
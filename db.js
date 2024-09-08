
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Default XAMPP username
  password: '',  // Leave blank if there's no password
  database: 'millionare_game'
});

module.exports = db;

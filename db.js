const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'sql312.infinityfree.com',
  user: 'if0_37264344',  // Default XAMPP username
  password: '9A0MSJElepz',  // Leave blank if there's no password
  database: 'if0_37264344_millionaire_game'
});

module.exports = db;

const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'b2zyfptjbv8topy3trho-mysql.services.clever-cloud.com',
  user: 'uwpipfr3xds97kn1',  // Default XAMPP username
  password: 'uwpipfr3xds97kn1',  // Leave blank if there's no password
  database: 'b2zyfptjbv8topy3trho'
});

module.exports = db;

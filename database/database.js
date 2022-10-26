const mysql = require('mysql');



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb"
  });
  
  db.connect(function(err) {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + db.threadId);
  });

  module.exports = db;
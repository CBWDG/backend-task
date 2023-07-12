const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-lecture.cpgfg5fatdq6.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "zeratule135!",
  database: "login_lecture",
});

db.connect();

module.exports = db;

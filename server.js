const fs = require('fs')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const serverPort = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const { host, user, password, port, database } = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host,
  user,
  password,
  port,
  database
});
connection.connect();

app.get("/api/customers", (req, res) => {
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));

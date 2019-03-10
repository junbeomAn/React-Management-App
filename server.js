const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const serverPort = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const { host, user, password, port, database } = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host,
  user,
  password,
  port,
  database
});
connection.connect();

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER WHERE isDeleted = 0", (err, rows, fields) => {
    res.send(rows);
  });
});
app.use("/image", express.static("./upload")); // image로 접근을 하면 로컬 서버의 upload폴더로 접근을 하는 것이된다.
app.post("/api/customers", upload.single('image'), (req, res) => {
  let sql = "INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)";
  let image = "/image/" + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];

  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
});
app.delete('/api/customer/:id', (req, res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
}) 

app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));

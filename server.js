const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "kim gil dong",
      birthday: "940902",
      gender: "male",
      job: "architect"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "hong gil dong",
      birthday: "960303",
      gender: "male",
      job: "programmer"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "buenos dias",
      birthday: "740524",
      gender: "female",
      job: "skater"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const client = require("./pgConnect");
const express = require("express");
const app = express();
const port = 3300;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

client.connect();

app.get("/people", (req, res) => {
  client.query(`Select * from people`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

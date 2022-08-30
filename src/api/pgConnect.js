const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Lakers24",
  database: "postgres",
});

module.exports = client;

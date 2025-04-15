const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const response = require('./controller/response');
const db = require('./connection/db');
const PORT = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.query("SELECT * FROM mahasiswa", (error, result) => {
    response(200, result, "get all data from mahasiswa", res)
  })
})

app.get('/:nim', (req, res) => {
  db.query("SELECT nim FROM mahasiwa", (error, result) => {
    response(200, result, "get nim data from mahasiswa", res)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
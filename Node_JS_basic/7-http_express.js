const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const csvdata = await countStudents('database.csv');
  if (csvdata) {
    res.status(200).send(`This is the list of our students\n${csvdata}`);
  } else {
    res.status(500).send('Cannot load the database');
  }
});
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;

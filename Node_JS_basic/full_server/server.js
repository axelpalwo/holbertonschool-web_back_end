const express = require('express');
const router = require('./routes/index');
const app = express();

app.use('/', router);

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
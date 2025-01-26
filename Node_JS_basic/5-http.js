const http = require('http');
const { countStudents } = require('./3-read_file_async'); // Importa la función countStudents

const app = http.createServer((req, res) => {
  // Maneja la solicitud GET
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      // Llama a countStudents y maneja la promesa
      countStudents('./database.csv')
        .then((csvdata) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(
            `This is the list of our students\n${
              csvdata}`,
          );
        })
        .catch((error) => {
          res.statusCode = 500;
          res.end(error.message);
        });
    }
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;

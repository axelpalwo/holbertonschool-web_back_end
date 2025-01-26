const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    try {
      const lines = data.trim().split('\n');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const ListCS = [];
      const ListSWE = [];
      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (firstname && field) {
          if (field === 'CS') {
            ListCS.push(firstname);
          } else if (field === 'SWE') {
            ListSWE.push(firstname);
          }
        }
      });
      const result = { cslist: ListCS, swelist: ListSWE };
      resolve(result);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});

module.exports = readDatabase;

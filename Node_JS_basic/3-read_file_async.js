const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
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

        let NUMBER_OF_STUDENTS = 0;
        let CS = 0;
        let SWE = 0;
        const ListCS = [];
        const ListSWE = [];

        lines.slice(1).forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (firstname && field) {
            NUMBER_OF_STUDENTS += 1;
            if (field === 'CS') {
              CS += 1;
              ListCS.push(firstname);
            } else if (field === 'SWE') {
              SWE += 1;
              ListSWE.push(firstname);
            }
          }
        });

        console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
        console.log(`Number of students in CS: ${CS}. List: ${ListCS.join(', ')}`);
        console.log(`Number of students in SWE: ${SWE}. List: ${ListSWE.join(', ')}`);
        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;

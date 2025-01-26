const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');

    if (lines.length <= 1) throw new Error('Cannot load the database');

    let NUMBER_OF_STUDENTS = 0;
    let CS = 0;
    let SWE = 0;
    const ListCS = [];
    const ListSWE = [];

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      NUMBER_OF_STUDENTS += 1;
      if (field === 'CS') {
        CS += 1;
        ListCS.push(firstname);
      } else if (field === 'SWE') {
        SWE += 1;
        ListSWE.push(firstname);
      }
    });

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    console.log(`Number of students in CS: ${CS}. List: ${ListCS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE}. List: ${ListSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

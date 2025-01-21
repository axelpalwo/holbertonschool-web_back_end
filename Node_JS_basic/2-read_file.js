const fs = require('fs');
const csv = require('csv-parser');

const countStudents = (path) => { 
    fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => {
            console.log(row)
        })
        .on('end', () => {
            console.log('Archivo CSV leído correctamente')
        })
        .on('error', (err) => {
            console.log('Error al leer el archivo CSV: ', err)
        })
}

module.exports = countStudents;
/*
throw error cannot load the database
console log Number of students: NUMBER_OF_STUDENTS
console log num of stud in each field, and list them
Number of students in FIELD: 6. List: LIST OF FIRSTNAMES 
*/
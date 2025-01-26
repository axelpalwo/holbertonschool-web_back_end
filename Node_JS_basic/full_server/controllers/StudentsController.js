const readDatabase = require('../utils')

class StudentsController {

    async getAllStudents(req, res) {
        try {
            let csvdata = await readDatabase('database.csv');
            if (csvdata) {
                res.status(200).send(`This is the list of our students\n
Number of students in CS: ${csvdata['cslist'].length}. List: ${csvdata['cslist'].sort().join(', ')}\n
Number of students in SWE: ${csvdata['swelist'].length}. List: ${csvdata['swelist'].sort().join(', ')}`)
            } else {
                console.log(csvdata)
                res.status(500).send('Cannot load the database');
            }
        } catch {
            res.status(500).send('Cannot load the database');
        }
    }

    async getAllStudentsByMajor(req, res) {
        try {
            let csvdata = await readDatabase('database.csv');
            if (csvdata) {
                if (req.params.major == 'CS') {
                    res.status(200).send(`List: ${csvdata['cslist'].join(', ')}`)
                } else if (req.params.major == 'SWE') {
                    res.status(200).send(`List: ${csvdata['swelist'].join(', ')}`)
                } else {
                    res.status(404).send('Data not found');
                }
            } else {
                res.status(500).send('Cannot load the database');
            }
        } catch {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;

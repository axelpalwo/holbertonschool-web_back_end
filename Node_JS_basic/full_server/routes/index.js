const express = require('express');
const appcontroller = require('../controllers/AppController');
const studcontroller = require('../controllers/StudentsController');
const router = express.Router();

const appcontrol = new appcontroller();
const studcontrol = new studcontroller();

router.get('/', appcontrol.getHomepage);
router.get('/students/', studcontrol.getAllStudents);
router.get('/students/:major', studcontrol.getAllStudentsByMajor)

module.exports = router;
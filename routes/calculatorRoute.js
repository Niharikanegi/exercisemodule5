var express = require('express');
var calculatorController = require('../controllers/calculatorController')
var router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res)
})

router.get('/min', (req, res) => {
    calculatorController.minNumbers(req, res)
})

router.get('/times', (req, res) => {
    calculatorController.timesNumbers(req, res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})

module.exports = router;

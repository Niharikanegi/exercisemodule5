const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({
        "number 1": number1,
        "OPERATION": "add",
        "number 2": number2,
        result: sum
    })

}

const minNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let min = number1 - number2
    console.log(min)
    res.status(200)
    res.json({ result: min })

}

const timesNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let times = number1 * number2
    console.log(times)
    res.status(200)
    res.json({ result: times })

}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let divide = number1 / number2
    console.log(divide)
    res.status(200)
    res.json({ result: divide })

}


module.exports = {
    addNumbers,
    minNumbers,
    timesNumbers,
    divideNumbers


}
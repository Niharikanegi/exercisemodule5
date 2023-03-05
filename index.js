const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const port = 3000
const port1 = 4000
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


let cors = require("cors");

app.use(cors());

app.use('/', express.static('public'))

var testRoute = require('./routes/myTestRoute');

var calculatorRoute = require('./routes/calculatorRoute');

var productRouter = require('./routes/productRouter')

app.use('/calculator',calculatorRoute)

app.use('/product',productRouter)

app.use('/mytest', testRoute);


app.listen(port, () => {
    console.log(`Example applistening at http://localhost:${port}`)
})

app.listen(port1, () => {
    console.log(`Example applistening at http://localhost:${port1}`)
})
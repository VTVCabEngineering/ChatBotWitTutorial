const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/hello', (request, response) => {
    response.send('Hello world with Wit.ai!')
})


app.use('/v1/', routes)

app.listen(4000, () => {
    console.log('Wit.ai API listening on port 4000')
})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const verification = require('./routes/verification')
const messageWebHook = require('./routes/messageWebHook')

app.use(bodyParser.json())

// GET: http://localhost:4005/
app.get('/', verification)
app.post('/', messageWebHook)

app.listen(4005, () => {
    console.log('AskMe server listening on port 4005')
})

console.log('Hello my niggas, you cool')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Wasup!!!!',
    robots: ['stiff', 'walabadubdub']
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: 'The user: ' + req.body.email + ' has been registered',
    your_mom: ['stufff', 'even more post stuff']
  })
})

app.listen(process.env.PORT || 8081)

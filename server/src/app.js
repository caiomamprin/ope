const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/healthmanager')
const db = mongoose.connection
db.on('error', () => {
  console.error.bind(console, 'connection error')
})

db.once('open', () => {
  console.log('connection succeeded')
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const Doctor = require('./models/Doctor')

app.get('/doctors', (req, res) => {
  Doctor.find({}, 'name email crfa status', (err, doctors) => {
    if(err)
      throw err

    res.send({
      doctors: doctors
    })
  }).sort({ _id: - 1 })
})

app.post('/doctors', (req, res) => {
  let db = req.db
  let name = req.body.name
  let email = req.body.email
  let crfa = req.body.crfa
  let status = req.body.status
  let doctor = new Doctor({
    name: name,
    email: email,
    crfa: crfa,
    status: status
  })

  doctor.save((err) => {
    if(err) 
      throw err

    res.send({
      success: true,
      message: 'Doctor saved successfully!'
    })
  })
})

app.listen(process.env.PORT || 8081)
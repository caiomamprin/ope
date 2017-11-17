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


app.get('/doctors/:id', (req, res) => {
  let db = req.db
  Doctor.findById(req.params.id, 'name email crfa status', (err, doctor) => {
    if(err)
      throw err

    res.send(doctor)
  })
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

app.put('/doctors/:id', (req, res) => {
  let db = req.db
  Doctor.findById(req.params.id, 'name email crfa status', (err, doctor) => {
    if(err)
      throw err

    doctor.name = req.body.name
    doctor.crfa = req.body.crfa
    doctor.email = req.body.email
    doctor.status = req.body.status

    doctor.save((err) => {
      if(err)
        throw err

      res.send({
        success: true
      })
    })
  })
})

app.delete('/doctors/:id', (req, res) => {
  let db = req.db
  Doctor.remove({ _id: req.params.id }, (err, doctor) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

app.listen(process.env.PORT || 8081)
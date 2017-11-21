const express = require('express')
const router = express.Router();

const Doctor = require('../models/Doctor')

router.get('/', (req, res) => {
  Doctor.find({}, 'name email crfa status created_at updated_at', (err, doctors) => {
    if(err)
      throw err

    res.send({
      doctors: doctors
    })
  }).sort({ _id: - 1 })
})


router.get('/:id', (req, res) => {
  let db = req.db
  Doctor.findById(req.params.id, 'name email crfa status created_at updated_at', (err, doctor) => {
    if(err)
      throw err

    res.send(doctor)
  })
})

router.post('/', (req, res) => {
  let db = req.db
  let name = req.body.name
  let email = req.body.email
  let crfa = req.body.crfa
  let status = req.body.status
  let doctor = new Doctor({
    name: name,
    email: email,
    crfa: crfa,
    status: status,
    created_at: new Date(),
    updated_at: new Date()
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

router.put('/:id', (req, res) => {
  let db = req.db
  Doctor.findById(req.params.id, 'name email crfa status', (err, doctor) => {
    if(err)
      throw err

    doctor.name = req.body.name
    doctor.crfa = req.body.crfa
    doctor.email = req.body.email
    doctor.status = req.body.status
    doctor.updated_at = new Date()

    doctor.save((err) => {
      if(err)
        throw err

      res.send({
        success: true
      })
    })
  })
})

router.delete('/:id', (req, res) => {
  let db = req.db
  Doctor.remove({ _id: req.params.id }, (err, doctor) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

module.exports = router
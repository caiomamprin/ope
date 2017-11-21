const express = require('express')
const router = express.Router();

const Patient = require('../models/Patient')
const HealthPlan = require('../models/HealthPlan')

router.get('/', (req, res) => {
  Patient.find({}).populate('healthplan').exec((err, patients) => {
    if(err)
      throw err
    
    
    res.send({
      patients: patients
    })
  })
})

router.get('/:id', (req, res) => {
  let db = req.db
  Patient.findById(req.params.id).populate('healthplan').exec((err, patient) => {
    if(err)
      throw err

    res.send(patient)
  })
})

router.post('/', (req, res) => {
  let db = req.db
  let name = req.body.name
  let cpf = req.body.cpf
  let birthDate = req.body.birthDate
  let status = req.body.status
  let healthplan = req.body.healthplan
  let patient = new Patient({
    name: name,
    cpf: cpf,
    birthDate: birthDate,
    status: status,
    healthplan: healthplan,
    created_at: new Date(),
    updated_at: new Date()
  })

  patient.save((err) => {
    if(err) 
      throw err

    res.send({
      success: true,
      message: 'Patient saved successfully!'
    })
  })
})

router.put('/:id', (req, res) => {
  let db = req.db
  Patient.findById(req.params.id, (err, patient) => {
    if(err)
      throw err

    patient.name = req.body.name
    patient.cpf = req.body.cpf
    patient.birthDate = req.body.birthDate
    patient.status = req.body.status
    patient.healthplan = req.body.healthplan
    patient.updated_at = new Date()

    patient.save((err) => {
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
  Patient.remove({ _id: req.params.id }, (err, patient) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

module.exports = router
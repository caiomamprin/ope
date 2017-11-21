const express = require('express')
const router = express.Router();

const HealthPlan = require('../models/HealthPlan')

router.get('/', (req, res) => {
  HealthPlan.find({}, 'businessName cnpj consultationFee status created_at updated_at', (err, healthplans) => {
    if(err)
      throw err

    res.send({
      healthplans: healthplans
    })
  }).sort({ _id: - 1 })
})


router.get('/:id', (req, res) => {
  let db = req.db
  HealthPlan.findById(req.params.id, 'businessName cnpj consultationFee status created_at updated_at', (err, healthplan) => {
    if(err)
      throw err

    res.send(healthplan)
  })
})

router.post('/', (req, res) => {
  let db = req.db
  let businessName = req.body.businessName
  let cnpj = req.body.cnpj
  let consultationFee = req.body.consultationFee
  let status = req.body.status
  let healthplan = new HealthPlan({
    businessName: businessName,
    cnpj: cnpj,
    consultationFee: consultationFee,
    status: status,
    created_at: new Date(),
    updated_at: new Date()
  })

  healthplan.save((err) => {
    if(err) 
      throw err

    res.send({
      success: true,
      message: 'HealthPlan saved successfully!'
    })
  })
})

router.put('/:id', (req, res) => {
  let db = req.db
  HealthPlan.findById(req.params.id, 'businessName cnpj consultationFee status created_at updated_at', (err, healthplan) => {
    if(err)
      throw err

    healthplan.businessName = req.body.businessName
    healthplan.cnpj = req.body.cnpj
    healthplan.consultationFee = req.body.consultationFee
    healthplan.status = req.body.status
    healthplan.updated_at = new Date()

    healthplan.save((err) => {
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
  HealthPlan.remove({ _id: req.params.id }, (err, healthplan) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

module.exports = router
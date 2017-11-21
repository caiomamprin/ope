const express = require('express')
const router = express.Router();

const Consultation = require('../models/Consultation')

router.get('/', (req, res) => {
  Consultation.find({}, 'consultationType privateConsultationFee status created_at updated_at', (err, consultations) => {
    if(err)
      throw err
    
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", 0);
    res.send({
      consultations: consultations
    })
  }).sort({ _id: - 1 })
})


router.get('/:id', (req, res) => {
  let db = req.db
  Consultation.findById(req.params.id, 'consultationType privateConsultationFee status created_at updated_at', (err, consultation) => {
    if(err)
      throw err

    res.send(consultation)
  })
})

router.post('/', (req, res) => {
  let db = req.db
  let consultationType = req.body.consultationType
  let privateConsultationFee = req.body.privateConsultationFee
  let status = req.body.status
  let consultation = new Consultation({
    consultationType: consultationType,
    privateConsultationFee: privateConsultationFee,
    status: status,
    created_at: new Date(),
    updated_at: new Date()
  })

  consultation.save((err) => {
    if(err) 
      throw err

    res.send({
      success: true,
      message: 'Consultation saved successfully!'
    })
  })
})

router.put('/:id', (req, res) => {
  let db = req.db
  Consultation.findById(req.params.id, 'consultationType privateConsultationFee status created_at updated_at', (err, consultation) => {
    if(err)
      throw err

    consultation.consultationType = req.body.consultationType
    consultation.privateConsultationFee = req.body.privateConsultationFee
    consultation.consultationFee = req.body.consultationFee
    consultation.status = req.body.status
    consultation.updated_at = new Date()

    consultation.save((err) => {
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
  Consultation.remove({ _id: req.params.id }, (err, consultation) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

module.exports = router
const express = require('express')
const router = express.Router();

const Calendar = require('../models/Calendar')

router.get('/', (req, res) => {
  Calendar.find({}, (err, calendars) => {
    if(err)
      throw err

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", 0);
    res.send({
      calendars: calendars
    })
  }).sort({ _id: - 1 })
})


router.get('/:id', (req, res) => {
  let db = req.db
  Calendar.findById(req.params.id, (err, calendar) => {
    if(err)
      throw err

    res.send(calendar)
  })
})

router.post('/', (req, res) => {
  let db = req.db
  let consultation = req.body.consultation
  let patient = req.body.patient
  let doctor = req.body.doctor
  let consultationDate = req.body.consultationDate
  let status = req.body.status
  let calendar = new Calendar({
    consultation: consultation,
    patient: patient,
    doctor: doctor,
    consultationDate: consultationDate,
    status: status,
    created_at: new Date(),
    updated_at: new Date()
  })

  calendar.save((err) => {
    if(err) 
      throw err

    res.send({
      success: true,
      message: 'Calendar saved successfully!'
    })
  })
})

router.put('/:id', (req, res) => {
  let db = req.db
  Calendar.findById(req.params.id, (err, calendar) => {
    if(err)
      throw err

    calendar.consultation = req.body.consultation
    calendar.patient = req.body.patient
    calendar.doctor = req.body.doctor
    calendar.consultationDate = req.body.consultationDate
    calendar.status = req.body.status
    calendar.updated_at = new Date()

    calendar.save((err) => {
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
  Calendar.remove({ _id: req.params.id }, (err, consultation) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

module.exports = router
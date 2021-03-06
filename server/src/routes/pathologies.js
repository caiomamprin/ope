const express = require('express')
const router = express.Router();

const Pathology = require('../models/Pathology')

router.get('/', (req, res) => {
  Pathology.find({}, (err, pathologies) => {
    if(err)
      throw err

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", 0);
    res.send({
      pathologies: pathologies
    })
  }).sort({ _id: - 1 })
})


router.get('/:id', (req, res) => {
  let db = req.db
  Pathology.findById(req.params.id, (err, pathology) => {
    if(err)
      throw err

    res.send(pathology)
  })
})

router.post('/', (req, res) => {
  let db = req.db
  let cid = req.body.cid
  let description = req.body.description
  let status = req.body.status
  let pathology = new Pathology({
    cid: cid,
    description: description,
    status: status,
    created_at: new Date(),
    updated_at: new Date()
  })

  pathology.save((err) => {
    if(err) 
      throw err

    res.send({
      success: true,
      message: 'Pathology saved successfully!'
    })
  })
})

router.put('/:id', (req, res) => {
  let db = req.db
  Pathology.findById(req.params.id, (err, pathology) => {
    if(err)
      throw err

    pathology.cid = req.body.cid
    pathology.description = req.body.description
    pathology.status = req.body.status
    pathology.updated_at = new Date()

    pathology.save((err) => {
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
  Pathology.remove({ _id: req.params.id }, (err, pathology) => {
    if(err)
      throw err

    res.send({
      success: true
    })
  })
})

module.exports = router
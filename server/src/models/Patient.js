const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  cpf: { 
    type: String, 
    required: true, 
    trim: true 
  },
  birthDate: { 
    type: String, 
    required: true, 
    trim: true 
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  healthplan: {
    type: Schema.Types.ObjectId, 
    ref: 'HealthPlan'
  },
  created_at: { 
    type: Date, 
    required: true, 
    default: Date.now() 
  },
  updated_at: { 
    type: Date, 
    required: true, 
    default: Date.now() 
  }
})

const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HealthPlanSchema = new Schema({
  businessName: { 
    type: String, 
    required: true, 
    trim: true 
  },
  cnpj: { 
    type: String, 
    required: true, 
    trim: true 
  },
  consultationFee: { 
    type: String, 
    required: true, 
    trim: true 
  },
  status: {
    type: Number,
    required: true,
    default: 1
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

const HealthPlan = mongoose.model('HealthPlan', HealthPlanSchema)

module.exports = HealthPlan
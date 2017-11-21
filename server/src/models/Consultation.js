const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConsultationSchema = new Schema({
  consultationType: { 
    type: String, 
    required: true, 
    trim: true 
  },
  privateConsultationFee: { 
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

const Consultation = mongoose.model('Consultation', ConsultationSchema)

module.exports = Consultation
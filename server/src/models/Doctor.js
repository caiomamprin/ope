const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoctorSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  crfa: { 
    type: String, 
    required: true, 
    trim: true 
  },
  email: { 
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

const Doctor = mongoose.model('Doctor', DoctorSchema)

module.exports = Doctor
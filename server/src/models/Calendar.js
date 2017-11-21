const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CalendarSchema = new Schema({
  consultation: { 
    type: Schema.Types.ObjectId, 
    ref: 'Consultation'
  },
  patient: { 
    type: Schema.Types.ObjectId, 
    ref: 'Patient'
  },
  doctor: { 
    type: Schema.Types.ObjectId, 
    ref: 'Doctor'
  },
  consultationDate: {
    type: Date,
    required: true
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

CalendarSchema.index({ consultation: 1, patient: 1, doctor: 1 })

const Calendar = mongoose.model('Calendar', CalendarSchema)

module.exports = Calendar
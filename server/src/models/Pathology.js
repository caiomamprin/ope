const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PathologySchema = new Schema({
  cid: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
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

const Pathology = mongoose.model('Pathology', PathologySchema)

module.exports = Pathology
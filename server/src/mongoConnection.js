const mongoose = require('mongoose')

mongoose.connect('mongodb://root:IjoacsyidIcnee7@ds259855.mlab.com:59855/healthmanager')
const db = mongoose.connection

db.on('error', () => {
  console.error.bind(console, 'connection error')
})

db.once('open', () => {
  console.log('connection succeeded')
})

module.exports = db
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Database
const db = require('./mongoConnection')

// Settings
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Routes
const doctors = require('./routes/doctors')
const healthplans = require('./routes/healthplans')
const patients = require('./routes/patients')
const pathologies = require('./routes/pathologies')

app.use('/doctors', doctors)
app.use('/healthplans', healthplans)
app.use('/patients', patients)
app.use('/pathologies', pathologies)

app.listen(process.env.PORT || 8081)
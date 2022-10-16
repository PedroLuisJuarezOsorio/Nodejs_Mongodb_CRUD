const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/Employee')

mongoose.connect('mongodb://0.0.0.0:27017/testdb',
{useNewUrlParser: true, useUnifiedTopology:true})
const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Base de datos Conectada Exitosamente')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server Corriendo en el Puerto: ${PORT}`)
})

app.use('/api/employee', EmployeeRoute)
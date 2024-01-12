import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

// Middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

// MongoDB Connection
mongoose.connect(MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'))
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB')
})

app.get('/', (req, res) => {
  res.send('Hola, bienvenido a tu API Node.js con Express y MongoDB.')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

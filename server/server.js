import express, { json, urlencoded } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { serve, setup } from 'swagger-ui-express'
import { load } from 'yamljs'
const swaggerDocs = load('./swagger.yaml')
import dbConnection from './database/connection'

config()

const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(json())
app.use(urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', serve, setup(swaggerDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

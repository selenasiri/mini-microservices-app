import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()

app.use(express.json())

app.use(cors())

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
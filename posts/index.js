import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()

app.use(express.json())

app.use(cors())

const posts = { name: 'selena siri' };

// https://posts.com/posts
// http://localhost:4000/posts
app.get('/posts', (req, res) => {
  res.send(posts);
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
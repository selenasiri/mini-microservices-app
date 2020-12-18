const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json())

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []) // Put [] at the end, so an array is always sent back after the request
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body // we will receive content from req.body

  const comments = commentsByPostId[req.params.id] || []; // uses the id given by the URL above: '/posts/:id/comments'

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments; // Send back the commentsByPostId to comments

  res.status(201).send(comments); // It works!! 
})

app.listen(4001, () => {
  console.log('Listening on 4001');
});
const express = require('express')

const server = express()

const PORT = 3000

server.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

server.get('/hello', (req, res) => {
  res.json({ hello: 'hi' })
})

server.listen(PORT, () => {
  console.log(`server running on localhost: ${PORT}`)
})

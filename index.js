const express = require('express')

const server = express()

const shortid = require('shortid')

const PORT = 3000

server.listen(PORT, () => {
  console.log(`server running on localhost: ${PORT}`)
})

server.use(express.json())

// server.get() **************************

server.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

server.get('/hello', (req, res) => {
  res.json({ hello: 'hi' })
})

server.get('/api/channels', (req, res) => {
  res.json({ hello: '/api/channels' })
})

// server.post() **************************

const lessons = [{ name: 'mod1', id: '1', cohort: 'sdffg' }]

// const channels = [
//   { name: 'mod1', id: '1', cohort: 'sdffg' },
//   { name: 'mod2', id: '2', cohort: 'sdffg' },
// ]

const channels = []

server.post('/api/channels', (req, res) => {
  // const channelInfo = req.body //object
  const channelInfo = { name: 'mod1', id: '1', cohort: 'sdffg' }
  // channelInfo.id = shortid.generate()
  channels.push(channelInfo)
  res.status(201).json(channelInfo)
})

server.get('/api/channels/:id', (req, res) => {
  // const viewData = { name: 'mod1', lessonId: '1', cohort: 'sdffg' }
  // res.json(viewData)
  // const lessons = [{ name: 'mod1', id: '1', cohort: 'sdffg' }]
  const { id } = req.params
  const found = lessons.find((lesson) => lesson.id == id)

  if (found) {
    res.status(200).json(found)
  } else {
    res.status(404).json({ message: 'lesson not found' })
  }
})

server.put('/api/channels/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body //array

  const index = channels.findIndex((channel) => channel.id == id)

  // const channels = [
  //   { name: 'mod1', id: '1', cohort: 'sdffg' },
  //   { name: 'mod2', id: '2', cohort: 'sdffg' },
  // ]

  if (index != -1) {
    channels[index] = changes
    res.status(200).json(channels[index])
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

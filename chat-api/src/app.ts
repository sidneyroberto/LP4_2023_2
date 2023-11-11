import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'

const app = express()

type Message = {
  text: string
  userName: string
}

const messages: Message[] = []

export const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5500',
  }
})

io.on('connection', (socket) => {
  console.log('Client connected')

  socket.emit('previousMessages', messages)

  socket.on('sendNewMessage', (messageObj: Message) => {
    console.log(messageObj)
    messages.push(messageObj)
    socket.broadcast.emit('messageReceived', messageObj)
  })

})
const socket = io('http://localhost:3000')

const $ = document.getElementById.bind(document)

socket.on('previousMessages', (messages) => {
  messages.forEach((m) => printMessage(m))
})

const sendMessage = (event) => {
  event.preventDefault()
  const userName = $('username').value
  const text = $('message').value
  const messageObj = { userName, text }
  socket.emit('sendNewMessage', messageObj)
  printMessage(messageObj)
}

socket.on('messageReceived', (messageObj) => {
  console.log(messageObj)
  printMessage(messageObj)
})

const printMessage = (messageObj) => {
  const { userName, text } = messageObj
  const newMessage = document.createElement('p')
  newMessage.innerText = `${userName}: ${text}`
  $('messages-area').appendChild(newMessage)
}

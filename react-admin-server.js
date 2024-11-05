const server = require('pushstate-server')

server.start({
  port: 1212,
  directory: './dist'
})

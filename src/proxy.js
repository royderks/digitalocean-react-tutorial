const connect = require('connect');
const http = require('http');
const proxy = require('http-proxy-middleware');

require('dotenv').config()

const apiUrl   = process.env.DO_API_URL
const apiToken = process.env.DO_ACCESS_TOKEN
const headers  = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apiToken
}

let app = connect()

// define http-proxy-middleware
let DOProxy = proxy({
  target: apiUrl,
  changeOrigin: true,
  headers: headers,
})

// define the route and map the proxy
app.use('/', DOProxy)

// fire up the server
http.createServer(app).listen(3001)

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/test', (req, res) => res
  .status(200)
  .send({ msg: 'hello' })
)

app.listen(port, () => console.info("e lá vamos nós"))

module.exports = app

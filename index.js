const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json({ limit: '10mb' }))
app.use(cors())

const routeClients = require('./routes/clients')
app.use('/', routeClients);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(8080, () => {
  console.log(`Server is running on port 8080`)
})
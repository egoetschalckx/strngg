const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.text())

app.all('/', (req, res) => res.send('\"' + req.body + '\"'))

app.listen(port, () => console.log(`strngg started on port ${port}!`))

const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(require('cors')()) // for cross-domain requests

require('./plugins/db')(app)    // Connect to MongoDB
require('./routes/admin')(app)  // Register routes

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
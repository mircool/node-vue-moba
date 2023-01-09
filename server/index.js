const express = require('express')
const app = express()
const port = 3000

app.set('secret', 'sssss1zass2ddddss');   //设置加密字符串

app.use(express.json()) // for parsing application/json
app.use(require('cors')()) // for cross-domain requests
app.use('/uploads', express.static(__dirname + '/uploads')) // for static files

require('./plugins/db')(app)    // Connect to MongoDB
require('./routes/admin')(app)  // Register routes

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
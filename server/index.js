const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, '../app/public/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/views/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

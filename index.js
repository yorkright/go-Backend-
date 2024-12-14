require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('gittwit.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login please </h1>')
})


app.get('/yt', (req, res) => {
    res.send('<h2>AN .Chaubey </h2>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
// const express = require('express')
import express from 'express'

const app = express()
const port = 3000
// const mongodb = require('./db/index.ts')

app.use(require('./router/index.ts'))
app.use(require('./404.ts'))

// mongodb.connectDB();

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`)
})

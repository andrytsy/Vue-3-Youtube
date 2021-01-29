// const express = require('express')
import express from 'express'
import pageNotFound404 from './404'
import router from './router/index'

const app = express()
const port = 3000

app.use(router)
app.use(pageNotFound404)

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`)
})

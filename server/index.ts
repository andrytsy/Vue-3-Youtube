const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
// const mongodb = require('./db/index.ts')

mongoose.connect('mongodb://mongo:27017/web-app-db', (err) => {
	if (err) {
		console.error('Error occurred while connecting to DB!')
		throw err
	} else {
		console.log('Database connection established successfully')
	}
})


app.use(require('./router/index.ts'))
app.use(require('./404.ts'))

// mongodb.connectDB();

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`)
})

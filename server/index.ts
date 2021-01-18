const express = require('express')
const app = express()
const port = 3000

app.use(require('./router/index.ts'))
app.use(require('./404.ts'))

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`)
})

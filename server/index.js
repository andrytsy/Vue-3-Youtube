const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
    console.log('Success!')
})

server.get('/getMenuSections', (req, res) => {
    const mainSections = [
        { id: 1, title: 'Home', path: '/' },
        { id: 1, title: 'Trending', path: '/feed/trends' },
        { id: 1, title: 'Subscriptions', path: '/feed/Subscriptions' }
    ]

    res.json(mainSections)
})

server.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`)
})

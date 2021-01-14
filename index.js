const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const createRenderer = require('vue-server-renderer').createRenderer

const CONTEXT = {
    title: 'Youtube',
    meta: `
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	`
}

server.get('*', (req, res) => {
    const app = new Vue({
        data: function () {
            return {
                url: req.url
            }
        },
        template: '<div>Вы открыли URL: {{ url }}</div>'
    })

    const template = fs.readFileSync('./public/index.html', 'utf-8')
    const renderer = createRenderer({ template })

    renderer.renderToString(app, CONTEXT, (err, html) => {
        if (err) {
            console.log(err)
            return res.status(500).end('Внутренняя ошибка сервера')
        }

        console.log(html) // выведется код всей страницы, с подставленным кодом приложения.

        res.end(html)
    })
})

server.listen(8080)

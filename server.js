// todo: для vue 3 пока нет поддержки ssr
// const server = require('express')()
// const fs = require('fs')
// const Vue = require('vue')
// const { createRenderer, createBundleRenderer } = require('vue-server-renderer')
//
// const App = require('./src/App.vue')
// const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
//
// const CONTEXT = {
//     title: 'Youtube',
//     meta: `
// 		<meta charset="utf-8">
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	`
// }
//
// server.get('*', (req, res) => {
//     const app = new Vue({
//         render: h => h(App)
//     })
//
//     const template = fs.readFileSync('./public/index.html', 'utf-8')
//     const renderer = createBundleRenderer(serverBundle, {
// 	    template,
// 	    clientManifest
//     })
//
//     renderer.renderToString(app, CONTEXT, (err, html) => {
//         if (err) {
//             console.log(err)
//             return res.status(500).end('Внутренняя ошибка сервера')
//         }
//
//         console.log(html) // выведется код всей страницы, с подставленным кодом приложения.
//
//         res.end(html)
//     })
// })
//
// server.listen(8080)

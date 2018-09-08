// Import route page
const user = require('./user')
const article = require('./article')

module.exports = (router) => {
    // Put 'router' to route page
    user(router)
    article(router)
}
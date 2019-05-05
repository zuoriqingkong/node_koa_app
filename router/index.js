const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

const articleController = require('../controllers/article')

router.post("/createArticle", articleController.create)

module.exports = router
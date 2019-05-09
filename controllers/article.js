const ArticleModule = require('../modules/article');

class articleController {
    static async create(ctx){
        let req = ctx.request.body
        if (req.title && req.author) {
            try {
                let ret = await ArticleModule.createArticle(req)

                const data = await ArticleModule.getArticleList(ret.id)
                ctx.response.status = 200;
                ctx.response.body = {
                    code: 200,
                    message: '创建成功',
                    data
                };
            } catch (error) {
                console.log(error)
            }
        }else{
            ctx.response.status = 303;
            ctx.response.body = {
                code: 303,
                message: '参数错误'
            };
        }
    }
}

module.exports = articleController;
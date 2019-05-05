const db = require('../config/db');

const Sequelize = db.sequelize;

const Article = Sequelize.import('../schema/articles');

Article.sync({force: false})

class ArticleModule {
    // 创建文章的接口
    static async createArticle(data){
        return await Article.create({
            title: data.title,
            author: data.author
        })
    }

    // 获取文章的接口
    static async getArticleList(id){
        return await Article.findOne({
            where: {id}
        })
    }
}

module.exports = ArticleModule;
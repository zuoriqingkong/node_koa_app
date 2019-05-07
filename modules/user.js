const db = require('../config/db');

const Sequelize = db.sequelize;

const User = Sequelize.import('../schema/user');

User.sync({force: false})

class UserModule {
    // 创建用户的接口
    static async createArticle(data){
        return await User.create({
            title: data.title,
            author: data.author
        })
    }

    // 获取用户的接口
    static async getArticleList(id){
        return await User.findOne({
            where: {id}
        })
    }
}

module.exports = UserModule;
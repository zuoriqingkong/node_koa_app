const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncreament: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'author'
        },
        createTime: {
            type: DataTypes.DATE,
            get(){
                return moment(this.getDataValue('cerateTime').format('YYYY-MM-DD HH:mm:ss'))
            }
        },
        // {
        //     freezeTableName: true
        // }
    });
}
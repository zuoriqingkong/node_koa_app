const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncreament: true
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nickname'
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'phone'
        },
        createTime: {
            type: DataTypes.DATE,
            get(){
                return moment(this.getDataValue('cerateTime').format('YYYY-MM-DD HH:mm:ss'))
            }
        },
        updateTime:{
            type: DataTypes.DATE,
            get(){
                return moment(this.getDataValue('updateTime').format('YYYY-MM-DD HH:mm:ss'))
            }
        }
    });
}
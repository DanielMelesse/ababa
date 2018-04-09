'use strict'

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        numericId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        userName: {
            type: DataTypes.STRING
        }
    })
return User;
}




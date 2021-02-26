const { DataTypes, } = require('sequelize')

const db = require('../config/dbconnection')


const Tutorial = db.define("tutorial", {
   
    title: {

        type: DataTypes.STRING,
        allowNull: false
    },

    description: {

        type: DataTypes.STRING

    },

    published: {

        type: DataTypes.BOOLEAN

    }

});

module.exports = {
    Tutorial
}





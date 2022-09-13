'use strict';
const {
    Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Photos = sequelize.define('Photos', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_photo: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        description: {
            type: "varchar(255)",
            allowNull: true,
        },
        gallery_id:{
            type: "varchar(255)",
            allowNull: true,
        },
        last_name: {
            type: "varchar(255)",
            allowNull: true,
            defaultValue: "lastname"
        },
        country_code: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        state: {
            type: "varchar(255)",
            allowNull: false,
        },
        postal_code: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },

    });

    Photos.associate = models => {
        Photos.belongsTo(models.User);
    };

    return Photos;
};


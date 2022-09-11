'use strict';
// const {
//     Model, Sequelize
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     }
//     User.init({
//         id: {
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//             type: Sequelize.INTEGER
//         },
//         username: {
//             type: "varchar(255)",
//             allowNull: false,
//         },
//         password: {
//             type: "varchar(255)",
//             allowNull: false,
//         },
//         country_code: {
//             type: Sequelize.INTEGER,
//             allowNull: false,
//         },
//         merchant_name: {
//             type: "varchar(255)",
//             allowNull: true,
//             defaultValue: "N/A"
//         },
//         // photos: {
//         //     type: "varchar(255)",
//         //     allowNull: true,
//         //     defaultValue: "N/A"
//         // },
//         account_id: {
//             type: "varchar(255)",
//             allowNull: true,
//             defaultValue: "N/A"
//         },
//
//
//     },
//     {
//         sequelize,
//         modelName: 'User',
//     });
//
//     User.associate = models => {
//         User.hasMany(models.Friends)
//     };
//
//     return User;
// };

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },     username: {
            type: "varchar(255)",
            allowNull: false,
        },
        password: {
            type: "varchar(255)",
            allowNull: false,
        },
        country_code: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        merchant_name: {
            type: "varchar(255)",
            allowNull: true,
            defaultValue: "N/A"
        },
        // photos: {
        //     type: "varchar(255)",
        //     allowNull: true,
        //     defaultValue: "N/A"
        // },
        account_id: {
            type: "varchar(255)",
            allowNull: true,
            defaultValue: "N/A"
        }
    });

    User.associate = models => {
        User.hasMany(models.Friends);
        User.hasMany(models.Groups);
        User.hasOne(models.AccountInfo);
        User.hasMany(models.Photos);
    };

    return User;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
    const Groups = sequelize.define('Groups', {
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
        account_id: {
            type: "varchar(255)",
            allowNull: true,
            defaultValue: "N/A"
        }
    });

    Groups.associate = models => {
        Groups.belongsTo(models.User);
    };

    return Groups;
};

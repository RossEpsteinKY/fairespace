module.exports = (sequelize, DataTypes) => {
    const AccountInfo = sequelize.define('AccountInfo', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        first_name: {
            type: "varchar(255)",
            allowNull: true,
            defaultValue: "firstname"
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

    AccountInfo.associate = models => {
        AccountInfo.belongsTo(models.User);
    };

    return AccountInfo;
};

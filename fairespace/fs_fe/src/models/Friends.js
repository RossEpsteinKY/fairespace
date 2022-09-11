module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define('Order', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        status: DataTypes.STRING,
        invoiceNumber: DataTypes.STRING,
    });

    Friends.associate = models => {
        Friends.belongsTo(models.User);
    };

    return Order;
};

module.exports = (sequelize, DataTypes) => {
  const ShopEmployee = sequelize.define('shop_employee', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    employeeId: {
      field: 'employee_id',
      type: DataTypes.INTEGER, 
      references: {
        model: 'employee',
        key: 'id'
      },
      allowNull: false,
    },
    shopId: {
      field: 'shop_id',
      type: DataTypes.INTEGER, 
      references: {
        model: 'shop',
        key: 'id'
      },
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  ShopEmployee.associate = (models) => {
    models['shop_employee'].belongsTo(models.employee, {
        foreignKey: 'employeeId',
        targetKey: 'id',
        onDelete: 'CASCADE',
        as: 'employee'
    });

    models['shop_employee'].belongsTo(models.shop, {
      foreignKey: 'shopId',
      targetKey: 'id',
      onDelete: 'CASCADE',
      as: 'shop'
    });
  };

  return ShopEmployee;
}

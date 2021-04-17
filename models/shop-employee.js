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
  });

  return ShopEmployee;
}

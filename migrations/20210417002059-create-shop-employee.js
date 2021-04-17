'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('shop_employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      employeeId: {
        field: 'employee_id',
        type: DataTypes.INTEGER, 
        onDelete: 'CASCADE',
        references: {
          model: 'employee',
          key: 'id'
        },
        allowNull: false,
      },
      shopId: {
        field: 'shop_id',
        type: DataTypes.INTEGER, 
        onDelete: 'CASCADE',
        references: {
          model: 'shop',
          key: 'id'
        },
        allowNull: false,
      },
    })
  }
}

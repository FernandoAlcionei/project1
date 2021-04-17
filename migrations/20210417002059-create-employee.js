'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      typeId: {
        field: 'type_id',
        type: DataTypes.INTEGER, 
        references: {
          model: 'employee_type',
          key: 'id'
        },
        allowNull: false,
      },
      telephone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      employmentDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'employment_date'
      },
    })
  }
}

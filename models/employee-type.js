module.exports = (sequelize, DataTypes) => {
  const EmployeeType = sequelize.define('employee_type', {
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
    salary: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  EmployeeType.associate = (models) => {
    models['employee_type'].hasOne(models.employee, {
      foreignKey: 'typeId',
      sourceKey: 'id',
      as: 'employee',
    });
  }

  return EmployeeType;
}

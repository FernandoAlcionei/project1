module.exports = (sequelize, DataTypes) => {
const Employee = sequelize.define('employee', {
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
  }, {
    timestamps: false,
    freezeTableName: true,
  })

  Employee.associate = (models) => {
    models.employee.belongsTo(models['employee_type'], {
      foreignKey: 'typeId',
      targetKey: 'id',
      onDelete: 'CASCADE',
      as: 'employeeType'
    });

    models.employee.hasMany(models['shop_employee'], {
        foreignKey: 'employeeId',
        sourceKey: 'id',
        as: 'shops',
        onDelete: 'CASCADE',
    });
  };

  return Employee;
}
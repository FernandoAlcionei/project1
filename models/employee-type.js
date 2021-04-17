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
  });

  return EmployeeType;
}

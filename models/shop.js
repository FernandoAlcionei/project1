module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('shop', {
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
    telephone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  Shop.associate = (models) => {
    models.employee.hasMany(models['shop_employee'], {
        foreignKey: 'shopId',
        sourceKey: 'id',
        as: 'employees',
        onDelete: 'CASCADE',
    });
  };

  return Shop;
}

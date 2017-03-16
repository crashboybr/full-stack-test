'use strict';

module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define('Product', {
      title: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          Product.belongsTo(models.Item);
        }
      }
    }
  );

  return Product;
};

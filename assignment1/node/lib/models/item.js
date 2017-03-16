'use strict';

module.exports = (sequelize, DataTypes) => {
  let Item = sequelize.define('Item', {
      title: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          Item.belongsTo(models.Venue);
          Item.hasOne(models.Space);
          Item.hasOne(models.Product);
        }
      }
    }
  );

  return Item;
};

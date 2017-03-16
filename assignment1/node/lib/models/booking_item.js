'use strict';

module.exports = (sequelize, DataTypes) => {
  let BookingItem = sequelize.define('BookingItem', {
      title: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          BookingItem.belongsTo(models.Item);
          BookingItem.belongsTo(models.Booking);
        }
      }
    }
  );

  return BookingItem;
};

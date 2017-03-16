'use strict';

module.exports = (sequelize, DataTypes) => {
  let Booking = sequelize.define('Booking', {
      title: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          Booking.belongsTo(models.Booker);
          Booking.hasMany(models.BookingItem);
        }
      }
    }
  );

  return Booking;
};

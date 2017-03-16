'use strict';

module.exports = (sequelize, DataTypes) => {
  let Booker = sequelize.define('Booker', {
      title: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          Booker.belongsTo(models.User);
          Booker.hasMany(models.Booking);
        }
      }
    }
  );

  return Booker;
};

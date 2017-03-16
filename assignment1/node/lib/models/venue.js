'use strict';

module.exports = (sequelize, DataTypes) => {
  let Venue = sequelize.define('Venue', {
      title: DataTypes.STRING 
    }, 
    {
      classMethods: {
        associate: function(models) {
          Venue.hasMany(models.Item);
        }
      }
    }
  );

  return Venue;
};

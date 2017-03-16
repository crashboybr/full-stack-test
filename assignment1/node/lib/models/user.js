'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
      name: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.Booker);
        }
      }
    }
  );

  return User;
};

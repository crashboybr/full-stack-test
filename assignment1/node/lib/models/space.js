'use strict';

module.exports = (sequelize, DataTypes) => {
  let Space = sequelize.define('Space', {
      title: DataTypes.STRING
    }, 
    {
      classMethods: {
        associate: function(models) {
          Space.belongsTo(models.Item);
        }
      }
    }
  );

  return Space;
};

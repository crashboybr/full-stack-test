'use strict';



module.exports = (sequelize, DataTypes) => {
  let Note = sequelize.define('Note', {
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING
  });

  return Note;
};
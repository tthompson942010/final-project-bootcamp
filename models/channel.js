'use strict';
module.exports = function(sequelize, DataTypes) {
  var Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Channel.hasMany(models.Show, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: false
          }          
        })
      }
    }
  });
  return Channel;
};
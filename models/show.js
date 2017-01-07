'use strict';
module.exports = function(sequelize, DataTypes) {
  var Show = sequelize.define('Show', {
    api_id: DataTypes.INTEGER,
    current_season: DataTypes.INTEGER,
    current_episode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Show;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Charities = sequelize.define('Charities', {
    username: {type: DataTypes.STRING, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Charities;
};
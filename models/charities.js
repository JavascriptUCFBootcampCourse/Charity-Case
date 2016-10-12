"use strict";
module.exports = function(sequelize, DataTypes) {
  var Charity = sequelize.define("Charity", {
    name: DataTypes.STRING
  }, {

    // define the table's name
    tableName: 'Charities',

    classMethods: {
      associate: function(models) {
        Charity.hasMany(models.Donation, {
        })
      }
    }
  });
  return Charity;
};

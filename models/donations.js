'use strict';
module.exports = function(sequelize, DataTypes) {
  var Donation = sequelize.define('Donation', {
    amt: {type: DataTypes.FLOAT, allowNull: false}
  }, {

    // define the table's name
    tableName: 'Donations',

    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Donation.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        })
        Donation.belongsTo(models.Charity, {
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Donation;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
  }, {
    classMethods: {

    // define the table's name
    tableName: 'Users',

      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Donation, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  
  });
  return User;
};
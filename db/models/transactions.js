'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('transactions', {
    transactionHash: DataTypes.STRING,
    isSuccessful: DataTypes.BOOLEAN,
    block: DataTypes.INTEGER,
    nonce: DataTypes.INTEGER,
    senderAddress: DataTypes.STRING
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  return Transactions;
};
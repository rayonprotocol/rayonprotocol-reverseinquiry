var strings = artifacts.require('../libraries/strings.sol');
var RayonUser = artifacts.require('./RayonUser.sol');
var RayonAuction = artifacts.require('./RayonAuction.sol');
var Message = artifacts.require('./Message');

module.exports = function(deployer) {
  return deployer.deploy(strings)
    .then(() => deployer.deploy(RayonUser))
    .then(rayonUser => deployer.deploy(RayonAuction, rayonUser.address))
    .then(rayonAuction => deployer.deploy(Message, rayonAuction.address));
};

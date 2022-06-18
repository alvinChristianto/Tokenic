//var BEP20 = artifacts.require("./BEP20");
//var LiquidityValueCalculator = artifacts.require("./LiquidityValueCalculator");
var JAGOTOKENV2 = artifacts.require("./JAGOTOKENV2");

module.exports = function(deployer) {
  deployer.deploy(JAGOTOKENV2);
}

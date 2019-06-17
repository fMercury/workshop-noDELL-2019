const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};

// 2 tipos de deploy
// smart contract gigante
// usar contratos deployados

// problema limite de gas por transacciones

// cuando envias deploy a la blockchain, tenes que firmar la transaccion
// truffle en el test agarra los datos de la cuenta cero 
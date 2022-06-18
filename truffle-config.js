const HDWalletProvider = require("@truffle/hdwallet-provider")
const infuraKey = "a3491ed6ac7a4c3a87a914bbe5a1bbdd"
const fs = require('fs');
const { mnemonic, BSCSCANAPIKEY, ETHERSCANAPIKEY} = require('./env.json');

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: BSCSCANAPIKEY,
    etherscan: ETHERSCANAPIKEY
  },
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    bscTestnet: {
      networkCheckTimeout: 9999999,
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-2-s3.binance.org:8545`),
      pollingInterval:300000,    
      network_id: 97,
      gas: 5500000,
      confirmations: 10,
      timeoutBlocks: 20000,
      skipDryRun: true
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraKey}`
        ),
      network_id : 3,
      gas : 5500000,
      confirmation : 2,
      timeoutBlocks : 200,
      skipDryRun : true,
    }
  },
  mocha: {
    timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
       version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  }
};

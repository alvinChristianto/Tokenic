const HDWalletProvider = require("@truffle/hdwallet-provider")
const infuraKey = "a3491ed6ac7a4c3a87a914bbe5a1bbdd"
const fs = require('fs');
const { mnemonic, BSCSCANAPIKEY} = require('./env.json');

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: BSCSCANAPIKEY
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,//7545
      network_id: '*'
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
    },
    testnet: {
      provider: () => 
        new HDWalletProvider(
          mnemonic, 
          'https://data-seed-prebsc-2-s1.binance.org:8545/'),
      network_id: 97,
      gas: 20000000,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  mocha: {
    timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
       version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
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

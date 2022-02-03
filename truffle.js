var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'YOUR WALLET KEY';
const INFURA_MAINNET_API_KEY = '';
const INFURA_ROPSTEN_API_KEY = ''; 

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        mainnet: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/" + INFURA_MAINNET_API_KEY)
            },
            network_id: 1, // ETH Mainnet
            gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/" + INFURA_ROPSTEN_API_KEY)
            },
            network_id: 3,     // ETH Ropsten
            gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
        }
    }
};
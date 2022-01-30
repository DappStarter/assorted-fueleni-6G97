require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remain solid grace glimpse fortune sponsor'; 
let testAccounts = [
"0xb4b3202b1e48228a71145dcc0d3904fd3cf7149e3fb0eeb9c1386beb210f8bbd",
"0xf6d09f7090f4095217a9015056ed4c5953cc3b45e93307d83fa42cc3bbada7b6",
"0x7e43579edbc7c9444ebdfd0864e4f5434cdb5406f0c512550f2633e9e3680e23",
"0x92d908313b9890fbd92c80c39dcf7d46a8f5a78dfad86fe21a504418b3564f1e",
"0x539fe4ace503d205b75195f12261c8708665100b8f129bb2243295ce5b83e4a8",
"0x7cf942e7efc489bd348b5ebb2f387d179bc9a3eead30f697973a71eccd5d178e",
"0xa40e5e66528f6bd25db631edae70f297231c16fe85ae72f3abbeff8fece0a4a1",
"0x6930b8f3d1d044aea09f2ac9316bc3cce91c334a5ccd8cc0c96880e9d6f100c6",
"0x02c33d02995974a13ce14d889fbd38a1607b679ffe641f5cf4be8594fcf46b3a",
"0x783e6dbfb2a999dc9b0a4a9010c857b2768b19ba0e80c1f7299c40ccbd2427c9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stone rule saddle evidence gesture hat army gasp'; 
let testAccounts = [
"0xf5da58c49dbd93c48b1d3a744d00bcb3ee2874409a2e588e88af637ac54d8537",
"0x8eb80792c2243c5f2bf0e6c32ea81458094713400921980b772a0656be4e3e9d",
"0x89e58cfa584fc7a49afdeade93874ce293fdcefcb0476d645c7155daa548218b",
"0x26d31c479a50a25d23435d1cb946af6070755504e6aa53b72825847f65b67085",
"0xa52b479f7e13dcdb893948c7e2f6f5b0e3185ae5e02a54b0c0eb0a69bc922a03",
"0x6d4f085ed533834f96873b778dcc1ccf1e4ba1e2cbf4d945175d57b1c0166cb5",
"0x8635f32ace3620a4857701fc96759372390e28a089399fa10b625d9525f8764d",
"0x316ecc0d15796a20c05c3bb4ec270e2d8c2c5e251f7b39c74e24784015306800",
"0x0ab3440b87a358a509f3ab7974ab3f6a3c877bf231d15fc67adf47697f7c5651",
"0x1615d92b0ebec15571fa303743718c9cd975f3b44b19e0eed7e85918f09fb6c8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


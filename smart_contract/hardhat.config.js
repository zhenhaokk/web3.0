// https://eth-ropsten.alchemyapi.io/v2/LQxw5iL4pWb0Ckip14jS7IrUOEVNKIaD

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/LQxw5iL4pWb0Ckip14jS7IrUOEVNKIaD",
      accounts: [
        "a60f87854f872929d5d17a03fb3a366af53e82a213eeea42a23ba7940bfae751",
      ],
    },
  },
};
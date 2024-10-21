/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.26",
  networks: {
    local: {
      url: `http://127.0.0.1:8011`,
      accounts: [
        // rich wallet private key of era-test-node
        "0x105de4e75fe465d075e1daae5647a02e3aad54b8d23cf1f70ba382b9f9bee839",
      ],
    },
  },
};

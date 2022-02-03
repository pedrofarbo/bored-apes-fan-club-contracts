var BoredApesFanClubNFT = artifacts.require("BoredApesFanClubNFT");

module.exports = function(deployer) {
    deployer.deploy(BoredApesFanClubNFT, "BoredApesFanClubNFT");
    // Additional contracts can be deployed here
};
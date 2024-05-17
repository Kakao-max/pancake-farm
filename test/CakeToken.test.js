const { assert } = require("chai");

const CakeToken = artifacts.require('CakeToken');

contract('CakeToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.cake = await CakeToken.new({ from: minter });
    });


    
});

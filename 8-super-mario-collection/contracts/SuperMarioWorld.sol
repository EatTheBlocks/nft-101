pragma solidity ^0.8.2;

import "./ERC721.sol";

contract SuperMarioWorld is ERC721 {

    string public name;

    string public symbol;

    uint256 public tokenCount; 

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    // tokenURI
    // mint
    // supportsInterface
}
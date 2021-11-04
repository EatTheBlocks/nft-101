pragma solidity ^0.8.2;

import "./ERC721.sol";

contract SuperMarioWorld is ERC721 {

    string public name;

    string public symbol;

    uint256 public tokenCount; 

    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    // Returns a URL that points to the metadata
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_owners[tokenId] != address(0), "TokenId does not exist");
        return _tokenURIs[tokenId];
    }
    
    // Creates a new NFT inside our collection
    function mint(string memory _tokenURI) public {

        tokenCount += 1; // tokenId
        _balances[msg.sender] += 1;
        _owners[tokenCount] = msg.sender;
        _tokenURIs[tokenCount] = _tokenURI; 

        emit Transfer(address(0), msg.sender, tokenCount);
    }
    
    // supportsInterface
}
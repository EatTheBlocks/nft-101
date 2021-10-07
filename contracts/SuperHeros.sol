pragma solidity ^0.8.2;

import "./ERC721.sol";

contract SuperHeros is ERC721 {
    
    string public name;

    string public symbol; 

    uint256 public nftCounter;

    mapping(uint256 => string) private _tokenURIs;

    constructor() {
        name = "FunkyFox";
        symbol = "FNKY";
    }    

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(ERC721._owners[tokenId] != address(0), "Token ID does not exist");
        return _tokenURIs[tokenId];
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        require(_owners[tokenId] != address(0), "Token ID does not exist");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function mint(string memory _tokenURI) public virtual {
        _balances[msg.sender] += 1;
        _owners[nftCounter] = msg.sender;
        _setTokenURI(nftCounter, _tokenURI);
        nftCounter += 1;

        emit Transfer(address(0), msg.sender, nftCounter);
    }
    
    function supportsInterface(bytes4 interfaceId) public pure override returns (bool) {
        return interfaceId == 0x80ac58cd || interfaceId == 0x5b5e139f;
    }
}
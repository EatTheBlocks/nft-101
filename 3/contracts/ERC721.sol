pragma solidity ^0.8.2;

contract ERC721 {

    // event Transfer();
    // event Approval();
    // event ApprovalForAll();

    mapping(address => uint256) internal _balances;

    mapping(uint256 => address) internal _owners;

    // Returns the number of NFTs assigned to an owner
    function balanceOf(address owner) public view returns(uint256) {
        require(owner != address(0), "Address is zero");
        return _balances[owner];
    }

    // Finds the owner of an NFT
    function ownerOf(uint256 tokenId) public view returns(address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "TokenID does not exist");
        return owner;
    }


    // function safeTransferFrom();
    // function safeTransferFrom();
    // function transferFrom();
    // function approve();
    // function setApprovalForAll();
    // function getApproved();
    // function isApprovedForAll();
}
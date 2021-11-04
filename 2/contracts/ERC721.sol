pragma solidity ^0.8.2;

contract ERC721 {

    // event Transfer();
    // event Approval();
    // event ApprovalForAll();

    mapping(address => uint256) internal _balances;

    // Returns the number of NFTs assigned to an owner
    function balanceOf(address owner) public view returns(uint256) {
        require(owner != address(0), "Address is zero");
        return _balances[owner];
    }
    // function ownerOf();
    // function safeTransferFrom();
    // function safeTransferFrom();
    // function transferFrom();
    // function approve();
    // function setApprovalForAll();
    // function getApproved();
    // function isApprovedForAll();
}
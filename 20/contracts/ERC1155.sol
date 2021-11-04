pragma solidity ^0.8.2;

contract ERC1155 {

    // event TransferSingle()
    // event TransferBatch()
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
    // event URI()

    // Mapping from TokenID to account balances
    mapping(uint256 => mapping(address => uint256)) internal _balances;

    // Mapping from account to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    // Gets the balance of an accounts tokens
    function balanceOf(address account, uint256 id) public view returns(uint256) {
        require(account != address(0), "Address is zero");
        return _balances[id][account];
    }

    // function balanceOfBatch()
    // function setApprovalForAll()
    // function isApprovedForAll()
    // function safeTransferFrom()
    // function safeBatchTransferFrom()
    // function supportsInterface()

}
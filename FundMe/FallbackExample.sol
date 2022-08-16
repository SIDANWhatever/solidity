// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract FallbackExample {
    uint256 public result;

    address[] public payers;
    uint256[] public funds;

    function fund() public payable {
        require(msg.value > 0, "No fund sent");
        payers.push(msg.sender);
        funds.push(msg.value);
        result = 3;
    }

    receive() external payable {
        result = 1;
        payers.push(msg.sender);
        funds.push(msg.value);
    }

    fallback() external payable {
        result = 2;
    }
}

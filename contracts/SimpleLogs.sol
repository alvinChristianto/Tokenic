// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleLogs {
  uint256 public logCounter;
  mapping (address => uint) balances;

  mapping(address => uint[]) public IDLog;
  mapping(uint256 => string) public IPFSLog;

  constructor()public{
    logCounter = 100;
    balances[tx.origin] = 10000;
  }

  function saveLogs(address _address, string memory _ipfsURL) public {
      uint256 newId = logCounter;
      IDLog[_address].push(newId);
      IPFSLog[newId] = _ipfsURL;

      logCounter = logCounter + 1;
  }

  function getDataById(uint256 _index) public view returns(string memory){
    return IPFSLog[_index];
  }

  function getDataByOwner(address _address) public view returns(uint[] memory){
    return IDLog[_address];
  }

  function getBalance(address addr) public view returns(uint) {
    return balances[addr];
  }
}

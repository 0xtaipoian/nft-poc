// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import 'hardhat/console.sol';

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract NftPoc is ERC721Enumerable, Ownable {
  uint256 public constant MAX_SUPPLY = 10;

  // Base URI
  string private _tokenBaseURI;

  constructor(string memory baseURI) ERC721('NftPoc', 'NFTPOC') {
    _setBaseURI(baseURI);
  }

  function mint() public payable {
    uint256 _totalSupply = totalSupply();

    require(_totalSupply < MAX_SUPPLY, 'Sale has already ended');
    require(_totalSupply + 1 <= MAX_SUPPLY, 'Exceeds maximum nft supply');
    require(msg.value >= 0.1 ether, 'Ether value sent is below the price');

    uint256 newTokenId = totalSupply();
    _mint(msg.sender, newTokenId);
  }

  function _setBaseURI(string memory baseURI) internal virtual {
    _tokenBaseURI = baseURI;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _tokenBaseURI;
  }

  function getTokensByOwner(address _owner) public view returns (uint256[] memory ownerTokens) {
    uint256 tokenCount = balanceOf(_owner);

    if (tokenCount == 0) {
      // Return an empty array
      return new uint256[](0);
    } else {
      uint256[] memory result = new uint256[](tokenCount);

      for (uint256 index = 0; index < tokenCount; index++) {
        result[index] = tokenOfOwnerByIndex(_owner, index);
      }

      return result;
    }
  }
}

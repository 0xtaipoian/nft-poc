// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import 'hardhat/console.sol';

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract NftPoc is IERC721Metadata, ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  // Base URI
  string private _tokenBaseURI;

  constructor(string memory baseURI) public ERC721('NftPoc', 'NFTPOC') {
    _setBaseURI(baseURI);
  }

  function mint(address owner) public returns (uint256) {
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();
    _mint(owner, newTokenId);

    return newTokenId;
  }

  function transferAsset(
    address from,
    address to,
    uint256 tokenId
  ) public {
    transferFrom(from, to, tokenId);
  }

  function getOwner(uint256 tokenId) public view returns (address) {
    return ownerOf(tokenId);
  }

  function _setBaseURI(string memory _baseURI) internal virtual {
    _tokenBaseURI = _baseURI;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _tokenBaseURI;
  }
}

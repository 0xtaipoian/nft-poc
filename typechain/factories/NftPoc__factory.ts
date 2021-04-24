/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { NftPoc } from "../NftPoc";

export class NftPoc__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NftPoc> {
    return super.deploy(baseURI, overrides || {}) as Promise<NftPoc>;
  }
  getDeployTransaction(
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(baseURI, overrides || {});
  }
  attach(address: string): NftPoc {
    return super.attach(address) as NftPoc;
  }
  connect(signer: Signer): NftPoc__factory {
    return super.connect(signer) as NftPoc__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NftPoc {
    return new Contract(address, _abi, signerOrProvider) as NftPoc;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getTokensByOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "ownerTokens",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620022fa380380620022fa8339810160408190526200003491620001d8565b604051806040016040528060068152602001654e6674506f6360d01b815250604051806040016040528060068152602001654e4654504f4360d01b81525081600090805190602001906200008a92919062000132565b508051620000a090600190602084019062000132565b5050506000620000b56200011560201b60201c565b600a80546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506200010e8162000119565b5062000301565b3390565b80516200012e90600b90602084019062000132565b5050565b8280546200014090620002ae565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b60006020808385031215620001eb578182fd5b82516001600160401b038082111562000202578384fd5b818501915085601f83011262000216578384fd5b8151818111156200022b576200022b620002eb565b604051601f8201601f19908116603f01168101908382118183101715620002565762000256620002eb565b8160405282815288868487010111156200026e578687fd5b8693505b8284101562000291578484018601518185018701529285019262000272565b82841115620002a257868684830101525b98975050505050505050565b600181811c90821680620002c357607f821691505b60208210811415620002e557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611fe980620003116000396000f3fe6080604052600436106101755760003560e01c80634f6ccce7116100cb57806395d89b411161007f578063c87b56dd11610059578063c87b56dd146103dc578063e985e9c5146103fc578063f2fde38b1461044557610175565b806395d89b4114610387578063a22cb4651461039c578063b88d4fde146103bc57610175565b806370a08231116100b057806370a0823114610334578063715018a6146103545780638da5cb5b1461036957610175565b80634f6ccce7146102f45780636352211e1461031457610175565b806318160ddd1161012d57806332cb6b0c1161010757806332cb6b0c1461029257806340398d67146102a757806342842e0e146102d457610175565b806318160ddd1461023357806323b872dd146102525780632f745c591461027257610175565b8063081812fc1161015e578063081812fc146101d1578063095ea7b3146102095780631249c58b1461022b57610175565b806301ffc9a71461017a57806306fdde03146101af575b600080fd5b34801561018657600080fd5b5061019a610195366004611d47565b610465565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101c46104ab565b6040516101a69190611e72565b3480156101dd57600080fd5b506101f16101ec366004611d7f565b61053d565b6040516001600160a01b0390911681526020016101a6565b34801561021557600080fd5b50610229610224366004611d1e565b6105d7565b005b610229610709565b34801561023f57600080fd5b506008545b6040519081526020016101a6565b34801561025e57600080fd5b5061022961026d366004611bd4565b61085a565b34801561027e57600080fd5b5061024461028d366004611d1e565b6108e1565b34801561029e57600080fd5b50610244600a81565b3480156102b357600080fd5b506102c76102c2366004611b88565b610989565b6040516101a69190611e2e565b3480156102e057600080fd5b506102296102ef366004611bd4565b610a6a565b34801561030057600080fd5b5061024461030f366004611d7f565b610a85565b34801561032057600080fd5b506101f161032f366004611d7f565b610b37565b34801561034057600080fd5b5061024461034f366004611b88565b610bc2565b34801561036057600080fd5b50610229610c5c565b34801561037557600080fd5b50600a546001600160a01b03166101f1565b34801561039357600080fd5b506101c4610d00565b3480156103a857600080fd5b506102296103b7366004611ce4565b610d0f565b3480156103c857600080fd5b506102296103d7366004611c0f565b610de1565b3480156103e857600080fd5b506101c46103f7366004611d7f565b610e6f565b34801561040857600080fd5b5061019a610417366004611ba2565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561045157600080fd5b50610229610460366004611b88565b610f58565b60006001600160e01b031982167f780e9d630000000000000000000000000000000000000000000000000000000014806104a357506104a38261108a565b90505b919050565b6060600080546104ba90611ef4565b80601f01602080910402602001604051908101604052809291908181526020018280546104e690611ef4565b80156105335780601f1061050857610100808354040283529160200191610533565b820191906000526020600020905b81548152906001019060200180831161051657829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105bb5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105e282610b37565b9050806001600160a01b0316836001600160a01b0316141561066c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016105b2565b336001600160a01b038216148061068857506106888133610417565b6106fa5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105b2565b6107048383611125565b505050565b600061071460085490565b9050600a81106107665760405162461bcd60e51b815260206004820152601660248201527f53616c652068617320616c726561647920656e6465640000000000000000000060448201526064016105b2565b600a610773826001611e85565b11156107c15760405162461bcd60e51b815260206004820152601a60248201527f45786365656473206d6178696d756d206e667420737570706c7900000000000060448201526064016105b2565b67016345785d8a000034101561083f5760405162461bcd60e51b815260206004820152602360248201527f45746865722076616c75652073656e742069732062656c6f772074686520707260448201527f696365000000000000000000000000000000000000000000000000000000000060648201526084016105b2565b600061084a60085490565b90506108563382611193565b5050565b61086433826112e1565b6108d65760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105b2565b6107048383836113d8565b60006108ec83610bc2565b82106109605760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016105b2565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6060600061099683610bc2565b9050806109b35750506040805160008152602081019091526104a6565b60008167ffffffffffffffff8111156109dc57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a05578160200160208202803683370190505b50905060005b82811015610a5a57610a1d85826108e1565b828281518110610a3d57634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610a5281611f29565b915050610a0b565b5091506104a69050565b50919050565b61070483838360405180602001604052806000815250610de1565b6000610a9060085490565b8210610b045760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016105b2565b60088281548110610b2557634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806104a35760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016105b2565b60006001600160a01b038216610c405760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016105b2565b506001600160a01b031660009081526003602052604090205490565b600a546001600160a01b03163314610cb65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105b2565b600a546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600a80546001600160a01b0319169055565b6060600180546104ba90611ef4565b6001600160a01b038216331415610d685760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105b2565b3360008181526005602090815260408083206001600160a01b0387168085529252909120805460ff1916841515179055906001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610dd5911515815260200190565b60405180910390a35050565b610deb33836112e1565b610e5d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105b2565b610e69848484846115b0565b50505050565b6000818152600260205260409020546060906001600160a01b0316610efc5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016105b2565b6000610f06611639565b90506000815111610f265760405180602001604052806000815250610f51565b80610f3084611648565b604051602001610f41929190611dc3565b6040516020818303038152906040525b9392505050565b600a546001600160a01b03163314610fb25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105b2565b6001600160a01b03811661102e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105b2565b600a546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600a80546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806110ed57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806104a357507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146104a3565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061115a82610b37565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166111e95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105b2565b6000818152600260205260409020546001600160a01b03161561124e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105b2565b61125a60008383611797565b6001600160a01b0382166000908152600360205260408120805460019290611283908490611e85565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600260205260408120546001600160a01b031661135a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105b2565b600061136583610b37565b9050806001600160a01b0316846001600160a01b031614806113a05750836001600160a01b03166113958461053d565b6001600160a01b0316145b806113d057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166113eb82610b37565b6001600160a01b0316146114675760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016105b2565b6001600160a01b0382166114e25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105b2565b6114ed838383611797565b6114f8600082611125565b6001600160a01b0383166000908152600360205260408120805460019290611521908490611eb1565b90915550506001600160a01b038216600090815260036020526040812080546001929061154f908490611e85565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6115bb8484846113d8565b6115c784848484611854565b610e695760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105b2565b6060600b80546104ba90611ef4565b606081611689575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526104a6565b8160005b81156116b3578061169d81611f29565b91506116ac9050600a83611e9d565b915061168d565b60008167ffffffffffffffff8111156116dc57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611706576020820181803683370190505b5090505b84156113d05761171b600183611eb1565b9150611728600a86611f44565b611733906030611e85565b60f81b81838151811061175657634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611790600a86611e9d565b945061170a565b6001600160a01b0383166117f2576117ed81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611815565b816001600160a01b0316836001600160a01b0316146118155761181583826119b7565b6001600160a01b0382166118315761182c81611a54565b610704565b826001600160a01b0316826001600160a01b031614610704576107048282611b2d565b60006001600160a01b0384163b156119ac57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611898903390899088908890600401611df2565b602060405180830381600087803b1580156118b257600080fd5b505af19250505080156118e2575060408051601f3d908101601f191682019092526118df91810190611d63565b60015b611992573d808015611910576040519150601f19603f3d011682016040523d82523d6000602084013e611915565b606091505b50805161198a5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105b2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506113d0565b506001949350505050565b600060016119c484610bc2565b6119ce9190611eb1565b600083815260076020526040902054909150808214611a21576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611a6690600190611eb1565b60008381526009602052604081205460088054939450909284908110611a9c57634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508060088381548110611acb57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611b1157634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611b3883610bc2565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b80356001600160a01b03811681146104a657600080fd5b600060208284031215611b99578081fd5b610f5182611b71565b60008060408385031215611bb4578081fd5b611bbd83611b71565b9150611bcb60208401611b71565b90509250929050565b600080600060608486031215611be8578081fd5b611bf184611b71565b9250611bff60208501611b71565b9150604084013590509250925092565b60008060008060808587031215611c24578081fd5b611c2d85611b71565b9350611c3b60208601611b71565b925060408501359150606085013567ffffffffffffffff80821115611c5e578283fd5b818701915087601f830112611c71578283fd5b813581811115611c8357611c83611f84565b604051601f8201601f19908116603f01168101908382118183101715611cab57611cab611f84565b816040528281528a6020848701011115611cc3578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611cf6578182fd5b611cff83611b71565b915060208301358015158114611d13578182fd5b809150509250929050565b60008060408385031215611d30578182fd5b611d3983611b71565b946020939093013593505050565b600060208284031215611d58578081fd5b8135610f5181611f9a565b600060208284031215611d74578081fd5b8151610f5181611f9a565b600060208284031215611d90578081fd5b5035919050565b60008151808452611daf816020860160208601611ec8565b601f01601f19169290920160200192915050565b60008351611dd5818460208801611ec8565b835190830190611de9818360208801611ec8565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611e246080830184611d97565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611e6657835183529284019291840191600101611e4a565b50909695505050505050565b600060208252610f516020830184611d97565b60008219821115611e9857611e98611f58565b500190565b600082611eac57611eac611f6e565b500490565b600082821015611ec357611ec3611f58565b500390565b60005b83811015611ee3578181015183820152602001611ecb565b83811115610e695750506000910152565b600181811c90821680611f0857607f821691505b60208210811415610a6457634e487b7160e01b600052602260045260246000fd5b6000600019821415611f3d57611f3d611f58565b5060010190565b600082611f5357611f53611f6e565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611fb057600080fd5b5056fea2646970667358221220d4e96999dac34cf0d06cd65ff668312198de62ac73f7bb50b8bdd4dd1bead11264736f6c63430008030033";

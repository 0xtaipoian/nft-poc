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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "transferAsset",
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
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d6238038062001d6283398101604081905262000034916200017a565b604051806040016040528060068152602001654e6674506f6360d01b815250604051806040016040528060068152602001654e4654504f4360d01b81525081600090805190602001906200008a929190620000d4565b508051620000a0906001906020840190620000d4565b505050620000b481620000bb60201b60201c565b50620002a3565b8051620000d090600b906020840190620000d4565b5050565b828054620000e29062000250565b90600052602060002090601f01602090048101928262000106576000855562000151565b82601f106200012157805160ff191683800117855562000151565b8280016001018555821562000151579182015b828111156200015157825182559160200191906001019062000134565b506200015f92915062000163565b5090565b5b808211156200015f576000815560010162000164565b600060208083850312156200018d578182fd5b82516001600160401b0380821115620001a4578384fd5b818501915085601f830112620001b8578384fd5b815181811115620001cd57620001cd6200028d565b604051601f8201601f19908116603f01168101908382118183101715620001f857620001f86200028d565b81604052828152888684870101111562000210578687fd5b8693505b8284101562000233578484018601518185018701529285019262000214565b828411156200024457868684830101525b98975050505050505050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611aaf80620002b36000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80634f6ccce7116100cd578063a22cb46511610081578063c41a360a11610066578063c41a360a146102ab578063c87b56dd146102be578063e985e9c5146102d157610151565b8063a22cb46514610285578063b88d4fde1461029857610151565b80636a627842116100b25780636a6278421461025757806370a082311461026a57806395d89b411461027d57610151565b80634f6ccce7146102315780636352211e1461024457610151565b806318160ddd116101245780632f745c59116101095780632f745c59146101f857806342842e0e1461020b578063439e2e451461021e57610151565b806318160ddd146101d357806323b872dd146101e557610151565b806301ffc9a71461015657806306fdde031461017e578063081812fc14610193578063095ea7b3146101be575b600080fd5b61016961016436600461184b565b61030d565b60405190151581526020015b60405180910390f35b610186610353565b6040516101759190611932565b6101a66101a1366004611883565b6103e5565b6040516001600160a01b039091168152602001610175565b6101d16101cc366004611822565b61047f565b005b6008545b604051908152602001610175565b6101d16101f33660046116d8565b6105b1565b6101d7610206366004611822565b610638565b6101d16102193660046116d8565b6106e0565b6101d161022c3660046116d8565b6106fb565b6101d761023f366004611883565b610706565b6101a6610252366004611883565b6107b8565b6101d761026536600461168c565b610843565b6101d761027836600461168c565b61086a565b610186610904565b6101d16102933660046117e8565b610913565b6101d16102a6366004611713565b6109e5565b6101a66102b9366004611883565b610a73565b6101866102cc366004611883565b610a7e565b6101696102df3660046116a6565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f780e9d6300000000000000000000000000000000000000000000000000000000148061034b575061034b82610b67565b90505b919050565b606060008054610362906119b4565b80601f016020809104026020016040519081016040528092919081815260200182805461038e906119b4565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104635760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061048a826107b8565b9050806001600160a01b0316836001600160a01b031614156105145760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161045a565b336001600160a01b0382161480610530575061053081336102df565b6105a25760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161045a565b6105ac8383610c02565b505050565b6105bb3382610c7d565b61062d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161045a565b6105ac838383610d74565b60006106438361086a565b82106106b75760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161045a565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6105ac838383604051806020016040528060008152506109e5565b6105ac8383836105b1565b600061071160085490565b82106107855760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161045a565b600882815481106107a657634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b03168061034b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161045a565b6000610853600a80546001019055565b600061085e600a5490565b905061034b8382610f59565b60006001600160a01b0382166108e85760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161045a565b506001600160a01b031660009081526003602052604090205490565b606060018054610362906119b4565b6001600160a01b03821633141561096c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161045a565b3360008181526005602090815260408083206001600160a01b0387168085529252909120805460ff1916841515179055906001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109d9911515815260200190565b60405180910390a35050565b6109ef3383610c7d565b610a615760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161045a565b610a6d848484846110b4565b50505050565b600061034b826107b8565b6000818152600260205260409020546060906001600160a01b0316610b0b5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161045a565b6000610b1561113d565b90506000815111610b355760405180602001604052806000815250610b60565b80610b3f8461114c565b604051602001610b509291906118c7565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982167f80ac58cd000000000000000000000000000000000000000000000000000000001480610bca57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061034b57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b031983161461034b565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610c44826107b8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610cf65760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161045a565b6000610d01836107b8565b9050806001600160a01b0316846001600160a01b03161480610d3c5750836001600160a01b0316610d31846103e5565b6001600160a01b0316145b80610d6c57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610d87826107b8565b6001600160a01b031614610e035760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161045a565b6001600160a01b038216610e7e5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161045a565b610e8983838361129b565b610e94600082610c02565b6001600160a01b0383166000908152600360205260408120805460019290610ebd908490611971565b90915550506001600160a01b0382166000908152600360205260408120805460019290610eeb908490611945565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610faf5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161045a565b6000818152600260205260409020546001600160a01b0316156110145760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161045a565b6110206000838361129b565b6001600160a01b0382166000908152600360205260408120805460019290611049908490611945565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6110bf848484610d74565b6110cb84848484611358565b610a6d5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161045a565b6060600b8054610362906119b4565b60608161118d575060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015261034e565b8160005b81156111b757806111a1816119ef565b91506111b09050600a8361195d565b9150611191565b60008167ffffffffffffffff8111156111e057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561120a576020820181803683370190505b5090505b8415610d6c5761121f600183611971565b915061122c600a86611a0a565b611237906030611945565b60f81b81838151811061125a57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611294600a8661195d565b945061120e565b6001600160a01b0383166112f6576112f181600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611319565b816001600160a01b0316836001600160a01b0316146113195761131983826114bb565b6001600160a01b0382166113355761133081611558565b6105ac565b826001600160a01b0316826001600160a01b0316146105ac576105ac8282611631565b60006001600160a01b0384163b156114b057604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061139c9033908990889088906004016118f6565b602060405180830381600087803b1580156113b657600080fd5b505af19250505080156113e6575060408051601f3d908101601f191682019092526113e391810190611867565b60015b611496573d808015611414576040519150601f19603f3d011682016040523d82523d6000602084013e611419565b606091505b50805161148e5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161045a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610d6c565b506001949350505050565b600060016114c88461086a565b6114d29190611971565b600083815260076020526040902054909150808214611525576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061156a90600190611971565b600083815260096020526040812054600880549394509092849081106115a057634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600883815481106115cf57634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061161557634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061163c8361086a565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b80356001600160a01b038116811461034e57600080fd5b60006020828403121561169d578081fd5b610b6082611675565b600080604083850312156116b8578081fd5b6116c183611675565b91506116cf60208401611675565b90509250929050565b6000806000606084860312156116ec578081fd5b6116f584611675565b925061170360208501611675565b9150604084013590509250925092565b60008060008060808587031215611728578081fd5b61173185611675565b935061173f60208601611675565b925060408501359150606085013567ffffffffffffffff80821115611762578283fd5b818701915087601f830112611775578283fd5b81358181111561178757611787611a4a565b604051601f8201601f19908116603f011681019083821181831017156117af576117af611a4a565b816040528281528a60208487010111156117c7578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156117fa578182fd5b61180383611675565b915060208301358015158114611817578182fd5b809150509250929050565b60008060408385031215611834578182fd5b61183d83611675565b946020939093013593505050565b60006020828403121561185c578081fd5b8135610b6081611a60565b600060208284031215611878578081fd5b8151610b6081611a60565b600060208284031215611894578081fd5b5035919050565b600081518084526118b3816020860160208601611988565b601f01601f19169290920160200192915050565b600083516118d9818460208801611988565b8351908301906118ed818360208801611988565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611928608083018461189b565b9695505050505050565b600060208252610b60602083018461189b565b6000821982111561195857611958611a1e565b500190565b60008261196c5761196c611a34565b500490565b60008282101561198357611983611a1e565b500390565b60005b838110156119a357818101518382015260200161198b565b83811115610a6d5750506000910152565b600181811c908216806119c857607f821691505b602082108114156119e957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611a0357611a03611a1e565b5060010190565b600082611a1957611a19611a34565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611a7657600080fd5b5056fea264697066735822122085aa07117734307bf52454bd1443898d5143277cdf7c11edebcc9a49620009e164736f6c63430008030033";

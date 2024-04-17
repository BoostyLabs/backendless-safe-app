/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from 'ethers';
import type {
  AllowanceModule,
  AllowanceModuleInterface,
} from '../../../../../../../@safe-global/safe-modules-deployments/dist/assets/allowance-module/v0.1.0/AllowanceModule';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
    ],
    name: 'AddDelegate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'DeleteAllowance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'value',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'nonce',
        type: 'uint16',
      },
    ],
    name: 'ExecuteAllowanceTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'paymentReceiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'payment',
        type: 'uint96',
      },
    ],
    name: 'PayAllowanceTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
    ],
    name: 'RemoveDelegate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'ResetAllowance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'allowanceAmount',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'resetTime',
        type: 'uint16',
      },
    ],
    name: 'SetAllowance',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ALLOWANCE_TRANSFER_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowances',
    outputs: [
      {
        internalType: 'uint96',
        name: 'amount',
        type: 'uint96',
      },
      {
        internalType: 'uint96',
        name: 'spent',
        type: 'uint96',
      },
      {
        internalType: 'uint16',
        name: 'resetTimeMin',
        type: 'uint16',
      },
      {
        internalType: 'uint32',
        name: 'lastResetMin',
        type: 'uint32',
      },
      {
        internalType: 'uint16',
        name: 'nonce',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    name: 'delegates',
    outputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'uint48',
        name: 'prev',
        type: 'uint48',
      },
      {
        internalType: 'uint48',
        name: 'next',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'delegatesStart',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'tokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'allowanceAmount',
        type: 'uint96',
      },
      {
        internalType: 'uint16',
        name: 'resetTimeMin',
        type: 'uint16',
      },
      {
        internalType: 'uint32',
        name: 'resetBaseMin',
        type: 'uint32',
      },
    ],
    name: 'setAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'resetAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'deleteAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract GnosisSafe',
        name: 'safe',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'amount',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'payment',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'executeAllowanceTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'amount',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'payment',
        type: 'uint96',
      },
      {
        internalType: 'uint16',
        name: 'nonce',
        type: 'uint16',
      },
    ],
    name: 'generateTransferHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
    ],
    name: 'getTokens',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getTokenAllowance',
    outputs: [
      {
        internalType: 'uint256[5]',
        name: '',
        type: 'uint256[5]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
    ],
    name: 'addDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'removeAllowances',
        type: 'bool',
      },
    ],
    name: 'removeDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        internalType: 'uint48',
        name: 'start',
        type: 'uint48',
      },
      {
        internalType: 'uint8',
        name: 'pageSize',
        type: 'uint8',
      },
    ],
    name: 'getDelegates',
    outputs: [
      {
        internalType: 'address[]',
        name: 'results',
        type: 'address[]',
      },
      {
        internalType: 'uint48',
        name: 'next',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
] as const;

export class AllowanceModule__factory {
  static readonly abi = _abi;
  static createInterface(): AllowanceModuleInterface {
    return new Interface(_abi) as AllowanceModuleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): AllowanceModule {
    return new Contract(address, _abi, runner) as unknown as AllowanceModule;
  }
}

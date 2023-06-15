/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StdStorageSafe,
  StdStorageSafeInterface,
} from "../../StdStorage.sol/StdStorageSafe";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "fsig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "keysHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "SlotFound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "WARNING_UninitedSlot",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122055a1f04b236d861ed45953df6c7624c941d87f72ec37656fbaebc12e68cf431c64736f6c63430008130033";

type StdStorageSafeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdStorageSafeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdStorageSafe__factory extends ContractFactory {
  constructor(...args: StdStorageSafeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<StdStorageSafe> {
    return super.deploy(overrides || {}) as Promise<StdStorageSafe>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdStorageSafe {
    return super.attach(address) as StdStorageSafe;
  }
  override connect(signer: Signer): StdStorageSafe__factory {
    return super.connect(signer) as StdStorageSafe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdStorageSafeInterface {
    return new utils.Interface(_abi) as StdStorageSafeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdStorageSafe {
    return new Contract(address, _abi, signerOrProvider) as StdStorageSafe;
  }
}

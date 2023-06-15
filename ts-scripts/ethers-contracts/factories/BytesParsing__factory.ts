/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BytesParsing, BytesParsingInterface } from "../BytesParsing";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "OutOfBounds",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ca1ce8f105dbe02ad11407d840a69ebab43d1871855263c7f1038fe7222c76b664736f6c63430008130033";

type BytesParsingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BytesParsingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BytesParsing__factory extends ContractFactory {
  constructor(...args: BytesParsingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<BytesParsing> {
    return super.deploy(overrides || {}) as Promise<BytesParsing>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BytesParsing {
    return super.attach(address) as BytesParsing;
  }
  override connect(signer: Signer): BytesParsing__factory {
    return super.connect(signer) as BytesParsing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BytesParsingInterface {
    return new utils.Interface(_abi) as BytesParsingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BytesParsing {
    return new Contract(address, _abi, signerOrProvider) as BytesParsing;
  }
}

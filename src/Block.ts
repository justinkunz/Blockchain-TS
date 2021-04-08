export {};

const { SHA256 } = require('cryptojs').Crypto;

class Block<BlockDataType> {
  hash: string;
  previousHash: string;
  data: BlockDataType;

  constructor(block: BlockDataType, previousHash: string) {
    this.previousHash = previousHash;
    this.data = block;
    this.hash = this.generateHash(block);
  }

  // Generate SHA256 Hash
  generateHash(block: BlockDataType) {
    return SHA256(JSON.stringify(block)).toString();
  }
}

export default Block;

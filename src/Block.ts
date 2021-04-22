export {};

const { SHA256 } = require('cryptojs').Crypto;

class Block<BlockDataType> {
  hash: string;
  previousHash: string;
  data: BlockDataType;

  constructor(block: BlockDataType, previousHash: string) {
    this.previousHash = previousHash;
    this.data = block;
    this.hash = this.generateHash();
  }

  // Generate SHA256 Hash
  generateHash() {
    // Hash should include previous hash + block data
    const { previousHash, data } = this;
    return SHA256(JSON.stringify({ previousHash, data })).toString();
  }
}

export default Block;

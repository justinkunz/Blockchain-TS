import Block from './Block';
import { BlockType } from './types';

class Blockchain<BlockDataType> {
  blocks: BlockType<BlockDataType>[];

  constructor() {
    this.blocks = [];
  }

  // Add new block to chain
  addBlock(block: BlockDataType) {
    const addedBlock = new Block<BlockDataType>(block, this.lastHash);
    this.blocks.push(addedBlock);

    return addedBlock;
  }

  // Most recently added block
  get lastHash() {
    return this.blocks.length > 0
      ? (this.blocks[this.blocks.length - 1] as BlockType<BlockDataType>).hash
      : '';
  }

  // Integrity validation
  get isValid() {
    return this.blocks.every(
      (block, index, blocks) =>
        index === 0 || block.previousHash === (blocks[index - 1] as BlockType<BlockDataType>).hash
    );
  }
}

export default Blockchain;

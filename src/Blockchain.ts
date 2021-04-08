import Block from './Block';

interface BlockType<Type> {
  data: Type;
  previousHash: string;
  hash: string;
}

class Blockchain<BlockDataType> {
  blocks: BlockType<BlockDataType>[];

  constructor() {
    this.blocks = [];
  }

  // Add new block to chain
  addBlock(block: BlockDataType) {
    const addedBlock = new Block<BlockDataType>(block, this.last.hash || '');
    this.blocks.push(addedBlock);

    return addedBlock;
  }

  // Most recently added block
  get last(): Partial<BlockType<BlockDataType>> {
    return this.blocks.length > 0
      ? (this.blocks[this.blocks.length - 1] as BlockType<BlockDataType>)
      : {};
  }

  // Integrity validation
  get isValid(): Boolean {
    return this.blocks.every(
      (block, index, blocks) =>
        index === 0 || block.previousHash === (blocks[index - 1] as BlockType<BlockDataType>).hash
    );
  }
}

export default Blockchain;

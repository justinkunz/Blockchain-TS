export interface BlockType<Type> {
  data: Type;
  previousHash: string;
  hash: string;
}

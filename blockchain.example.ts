import Blockchain from './src';

interface Transaction {
  amount: number;
  note: string;
}

const blockchain = new Blockchain<Transaction>();

blockchain.addBlock({ amount: 3, note: 'foo' });
blockchain.addBlock({ amount: 2, note: 'bar' });
blockchain.addBlock({ amount: 5, note: 'baz' });

console.log(blockchain);
console.log('Is blockchain valid:', blockchain.isValid);

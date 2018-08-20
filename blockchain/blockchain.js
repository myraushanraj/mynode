const SHA256=require("SHA256");
class Block{
    constructor(timestamp,data,previousHash=""){
       this.timestamp=timestamp;
       this.data=data;
       this.previousHash=previousHash;
       this.hash=this.createHash();
    }
    create(timestamp,data,previousHash=""){
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.createHash();
     }

    createHash(){
        return SHA256(this.timestamp+this.previousHash+JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.list=[this.genesisBlock()];
    }
    genesisBlock(){
        return new Block(new Date,"Genesis Block",'0');
    }
    cretateBlock(nextBlock){
        this.list.push(nextBlock);
    }
    
}
const blockchain=new Blockchain();

blockchain.cretateBlock(new Block(new Date,{Flat_Id:'MP001',Address:'HIG-30 Gautam Nagar Bhopal',owner_id:"A-MP02568"},blockchain.list[blockchain.list.length-1].hash));
blockchain.cretateBlock(new Block(new Date,{Flat_Id:'MP002',Address:'HIG-31 Gautam Nagar Bhopal',owner_id:"A-MP02569"},blockchain.list[blockchain.list.length-1].hash));

//blockchain.cretateBlock(new Block(new Date,{name:'manish raj',contact:8797983654},blockchain.list[blockchain.list.length-1].hash));
console.log(blockchain.list);

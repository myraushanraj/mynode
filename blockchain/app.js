const SHA256=require("sha256");

class Block{
     
     constructor(data,datetime,previous_hash=""){
       this.data=data;
       this.datetime=datetime;
       this.previous_hash=previous_hash;
       
       
        
       this.hash= this.calculateHash();
       
     }
     calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
      }
     
    

    
}

class myblock{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock(){

        return new Block( "Genesis block","01/01/2017", "0");
    }
    addBlock(newBlock) {
     
        this.chain.push(newBlock);
    }
   
}
let raushan = new myblock();
const new_block=raushan.addBlock(new Block( { name: "raushan1" }, "20/07/2017",raushan.chain[raushan.chain.length - 1].hash));

console.log(raushan.chain);



const SHA256=require("SHA256");
class Block{
    constructor(timestamp,data,previous_ash){
        timestamp=this.timestamp;
        data=this.data;
        previous_hash=this.previous_ash;
        hash=this.createHash();
    }

    createHash(){
        return SHA256(this.timestamp+this.previous_ash+JSON.stringify(this.data)).toString();
    }
}
const block=new Block("28-07-2018",{name:'raushan raj',phone:'8109299136'},0);

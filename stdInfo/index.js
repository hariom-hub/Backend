const info1 = require("./info1");
const info2 = require("./info2");
const info3 = require("./info3");


const totalINfo = { info1, info2, info3 };

module.exports = totalINfo;
let args = process.argv;



for(let i=0;i<args.length;i++){

    console.log("hello to ",args[i]);
}
//hello world
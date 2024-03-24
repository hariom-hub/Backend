// setTimeout(()=>{
//     for(let i=1;i<=10;i++){
//         console.log("hello world");
//     }
// },1000)

// for(let i=1;i<=10;i++){
//     console.log("hello world");
// }

// let args = process.argv;

// for(let i=0;i<args.length;i++){
//     if(i>=2){
//         console.log("hello to ",args[i]);
//     }else{
//         console.log(args[i]);
//     }
// }

// const obj = require("./math");
// const arr = require("./math");

// console.log(obj.name);
// console.log(arr.age);


//acquiring information from fruits directory
// const fruitInfo = require("./fruits");
// console.log(fruitInfo[1]);

// let args = process.argv;

// for(let i=2;i<args.length;i++){

//     console.log("hello to ",args[i]);
// }
// const obj = require("./math");
// console.log(obj);


// const info = require("./stdInfo");
// console.log(info);
// const figlet = require("figlet");

// console.log(
//     figlet.textSync("Hii Hariom", {
//         font: "Ghost",
//         horizontalLayout: "default",
//         verticalLayout: "default",
//         width: 80,
//         whitespaceBreak: true,
//     })
// );

import {sum,pi} from "./math.js";
console.log(pi);
console.log(sum(10,20));
// let a;
// var a;
// console.log("value of a "+a);

// function fn(a , b){
//     // console.log("i m function"+(a + b));
//     return a+b;
// }
// fn(10,20);
// // console.log(c)


// decimal to binary
// let a = 13;
// DtoB(13);

// function DtoB(n){
//        let power = 1;
//        let bin = 0;
//        while(n != 0){
//         let rem = n % 2;
//         bin = bin + rem * power;
        
//         power = power
//         n = Math.floor(n/2);
//        }

//        console.log(bin);
// }


// let key = "email";
// let obj = {
//  name : "abhishek",
//  title : "singh sinadeep",
//  age : "23",
//  friend : ["sandi", "aman", "satyam","tripahti"],
// }
// // let key = "title";
// //  console.log(obj.title);
// // for(let key in obj){
// //        console.log(obj[key]);
// // }
// //     obj[key] = singh.abhi;
// obj["key"] = singh.abhi;
//     console.log(obj);

// let key = "email";
// let person={
//        name : "abhis",
//        last : " singh",
//        age : "24",
// }

// // person["key"] = "abhisingh";
// person[key] = "singh.abhi";
// console.log(person);

// let b = [[1,2,3],[3,4,5],[6,7,8]];
// console.log(b)

// let a = [1,2,3,4,5];
// let slicedArray = a.slice(1,4);
// // a.unshift(20);
// console.log(slicedArray);
// console.log(a);


// let fs = require("fs");

// fs.writeFileSync("xyz.txt"," ");

// console.log("a",a);
// let a;
// a = 10;
// console.log("a",a);
// fn();
// function fn(){
//     console.log("i am a funco");
// }

function fn(){
    console.log("i m a fun")
    return 10;
}

let anotherfn = fn;
console.log(anotherfn);
let anotherreturnfn = fn();
console.log("anotherreturnfn",anotherreturnfn);
anotherfn();
fnAddressHolder();
var fnAddressHolder = function(){
    console.log("i am a fun");
}
fnAddressHolder();\\\


    // `let a = process.argv.slice(2);
    // let b = process.argv.slice(2);
    // let c = []; 
    // for(let i = b.lenght-1; i > 2; i--){
    //     c[i] = a[i] + b[i];
    // }
    // console.log(c);!

//declaring an arr
// var cars = [];


// //declaring+initializing arr
// var cars = ["BMW", "AUDI", "HONDA", 1, 2, 4, true, undefined];

// cars.length = 3;
// console.log(cars);
// <!-- flkmldgd  -->

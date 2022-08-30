const fs = require("fs");
// const promise = fs.promises.readFile("f11.txt");
// console.log("before");
// console.log("insial state",promise);
// function myFn(){
//     console.log("value",promise);
// }
// setTimeout(myFn,3000);
// console.log("9 line",promise);


// ------------await ------------
async function myFn(){
    const promise = fs.promises.readFile("f11.txt");
    console.log("before");
    console.log("inisial state",promise);
    console.log("After");
    let value = await promise;
    console.log("valure " + value);
    console.log("promise state",promise);
}
myFn();

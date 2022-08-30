// input
let input = document.querySelector("input");
// Add TAsk
let button = document.querySelector("button");
// ul
let ul = document.querySelector("ul");
// Add event listner 
let event = button.addEventListener("click",fn);
// body
let body = document.querySelector("body");
// crete
let div = document.createElement("div");

body.insertBefore(div,ul);

function fn (){
    let inputtext = input.value;
    console.log("dsjyhfg");
    if(inputtext == ""){
        alert("pls enter some text");
    }else {
         createDelete(inputtext);
         input.value = "";
    }
}

function createDelete(inputtext){
let div = document.createElement("div");
let li = document.createElement("li");
let button = document.createElement("button");
button.textContent = "delete";
// 
let text = input.value;
li.textContent = text;
div.appendChild(li);
div.appendChild(button);
ul.appendChild(div);
button.addEventListener("click", function (){
 div.remove();
});
}

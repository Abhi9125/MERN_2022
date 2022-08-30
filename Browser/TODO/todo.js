// input
let input = document.querySelector("input");
// Add TAsk
let button = document.querySelector("button");
// ul
let ul = document.querySelector("ul");
// Add event listner 
let event = button.addEventListener("click",fn);

function fn(){
    let text = input.value;
    if(text == ""){
        alert("text box is empty");
    }else {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        input.value = "";
    }

}
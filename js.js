alert("Testing");

let BTN = document.getElementById("myButton");
let doSomething = function(event){
    alert("Sheep");
}

for(var i = 0; i < 3; i++){
    let newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    newBTN.addEventListener("click", doSomething);
}
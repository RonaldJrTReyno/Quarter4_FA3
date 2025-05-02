var numput = false;
var nput = prompt("Please input a numerical value.", "");

while (numput == false) {
    if (isNaN(nput) == false) {
        numput = true;
    } else {
        nput = prompt("Please input a numerical value.", "");
    }
}

var ninput = document.getElementById("ninput");
var output = document.getElementById("output");

ninput.innerHTML = "Number inputted: " + nput;

if (nput % 2 == 0) {
    for (let i = nput; i >= 0; i--){
        for (let x = 0; x < i; x++){
            output.innerHTML += i + " ";
        }
        output.innerHTML += "<br>";
    }
} else {
    for (let i = nput; i >= 1; i--){
        for (let x = 0; x < nput; x++){
            output.innerHTML += i + " ";
        }
        output.innerHTML += "<br>";
    } 
}
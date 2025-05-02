var clist = [];1
var cdisp = document.getElementById("output");
var cinp = document.getElementById("ncontact");

function badd(){
    clist.push(cinp.value);
    if (clist.length > 7) {
        clist.shift();
    }
    update();
}

function bremove(){
    clist.pop();
    update();
}

function update(){
    cdisp.innerHTML = "";
    for (let i = 0; i < clist.length; i++) {
        cdisp.innerHTML += clist[i] + " ";
    }
}


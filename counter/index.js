let x = 0;


document.getElementById("oneplus").onclick = function(){
    x += 1
    document.getElementById("p").innerHTML = x;
}

document.getElementById("zero").onclick = function(){
    x = 0
    document.getElementById("p").innerHTML = x;
}
document.getElementById("oneminus").onclick = function(){
    x -= 1
    document.getElementById("p").innerHTML = x;
}



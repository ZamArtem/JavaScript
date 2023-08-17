let a;
let b;
let c;

/*
a = window.prompt("Enter side A");
a = Number(a);
b = window.prompt("Enter side A");
b = Number(b);


c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side C: ",c)
*/

document.getElementById("submit").onclick = function(){
    a = document.getElementById("aT").value;
    a = Number(a);
    b = document.getElementById("bT").value;
    b = Number(b);


    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("cL").innerHTML = "Side C: " +"<br>"+ c;
}
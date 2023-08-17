let x = Math.floor(Math.random() * 6) + 1;



document.getElementById("btn").onclick = function() {
    if (x == Number(document.getElementById("gues").value)) {
        document.getElementById("w/l").innerHTML = "<br>" + "YOU WON !!!"
        x = Math.floor(Math.random() * 6) + 1;
        console.log(x);
    } else {
        document.getElementById("w/l").innerHTML = "<br>"+"YOU LOST TRY AGAIN"
        x = Math.floor(Math.random() * 6) + 1;
        console.log(x);
    }

}
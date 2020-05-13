function Generate(){
var random = Math.random()*7;
random = Math.floor(random)+1;
    if (random == 1)
    {
        document.querySelector("#image").style.background = "HotPink";}
        else if (random == 2){
            document.querySelector("#image").style.background = "SeaGreen";
        }
        else if (random == 3){
            document.querySelector("#image").style.background = "Sienna";
        }
        else if (random == 4){
            document.querySelector("#image").style.background = "Teal";
        }
        else if (random == 5){
            document.querySelector("#image").style.background = "Coral";
        }
        else if (random == 6){
            document.querySelector("#image").style.background = "Grey";
        }
        else {
            document.querySelector("#image").style.background = "Black";
        }
    }
function Show() {
    if(document.getElementById("choose").value == "HotPink")
    {
        document.getElementById("image").style.background = "hotpink";
    }
    else if(document.getElementById("choose").value == "SeaGreen")
    {
        document.getElementById("image").style.background = "seagreen";
    }
    else if(document.getElementById("choose").value == "Sienna")
    {
        document.getElementById("image").style.background = "sienna";
    }
    else if(document.getElementById("choose").value == "Teal")
    {
        document.getElementById("image").style.background = "teal";
    }
    else if(document.getElementById("choose").value == "Coral")
    {
        document.getElementById("image").style.background = "coral";
    }
    else if(document.getElementById("choose").value == "Grey")
    {
        document.getElementById("image").style.background = "grey";
    }
    else if(document.getElementById("choose").value == "Black")
    {
        document.getElementById("image").style.background = "black";
    }
}

function Reset() {
    document.getElementById("image").style.background = "none";
}
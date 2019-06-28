document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.boxSizing = "border-box";


var header = document.getElementById("header");

header.style.background = "black";
header.style.width = "100%";;
header.style.height = "70px";
header.style.color = "white";



var hcontain = document.getElementById("hcontain");

hcontain.style.width = "80%";
hcontain.style.margin = "auto";
hcontain.style.display = "flex";
hcontain.style.justifyContent = "space-between";
hcontain.style.lineHeight = "70px";

var contain = document.getElementById("contain");

// contain.style.background = "lightgrey";
contain.style.width = "80%";
contain.style.height = "auto";
contain.style.display = "flex";
// contain.style.justifyContent = "space-between";
contain.style.margin = "auto"


var leftc = document.getElementById("leftc");

leftc.style.width = "30%";


var headline = document.getElementById("headline");

// headline.style.paddingLeft = "80px";
headline.style.paddingTop = "40px"

// var leftmenu = document.getElementById("leftmenu");


var menuboxu = document.getElementsByClassName("menuboxu");

for(let i = 0; i<menuboxu.length; i++){
    menuboxu[i].style.border = "1px solid black";
    menuboxu[i].style.width = "280px";
    menuboxu[i].style.height = "40px";
    menuboxu[i].style.marginBottom = "5px";
    menuboxu[i].style.color = "black";
    menuboxu[i].style.fontSize = "18px"
    menuboxu[i].style.paddingTop = "20px"
    menuboxu[i].style.paddingLeft = "20px"

}


var amenu = document.getElementsByClassName("amenu");

for(let i = 0; i<amenu.length; i++){
    amenu[i].style.padding ="5px";
    amenu[i].style.color = "white";
    amenu[i].style.textDecoration = "none";
    // amenu[i].hover.style.color = ""
    
}



var rightc = document.getElementById("rightc");

rightc.style.width = "70%";
// rightc.style.background = "red";
rightc.style.padding = "15px"



var slider = document.getElementById("slider");

slider.style.margin = "auto";
slider.style.width = "94.3%";
slider.style.height = "340px";
slider.style.background = "black";


var boxes = document.getElementById("boxes");

// boxes.style.margin = "auto"
boxes.style.width = "100%";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";

boxes.style.justifyContent = "space-around";



var box = document.getElementsByClassName("box");

for(let i = 0; i<box.length; i++){
    box[i].style.width = "200px";
    box[i].style.height = "300px";
    box[i].style.border = "1px solid black";
    box[i].style.marginTop = "10px";
    box[i].style.border = "1px solid grey";
}

var iframe = document.querySelectorAll("img");

for(let i = 0; i<iframe.length; i++){
    iframe[i].style.width = "200px";
    iframe[i].style.height = "120px"
}


var thead = document.getElementsByClassName("thead");

for(let i = 0; i<thead.length; i++){
    thead[i].style.textAlign = "center";
    thead[i].style.color = "blue";
}


var athead = document.getElementsByClassName("athead");

for(let i = 0; i<athead.length; i++){
    athead[i].style.textAlign = "center";
}


var tathead = document.getElementsByClassName("tathead");

for(let i = 0; i<tathead.length; i++){
    tathead[i].style.textAlign = "center";
}



var footer = document.getElementById("footer");

footer.style.background = "black";
footer.style.width = "100%";
footer.style.height = "70px";

var copyright = document.getElementById("copyright");

copyright.style.textAlign = "center";
copyright.style.color = "white";
copyright.style.lineHeight = "70px";
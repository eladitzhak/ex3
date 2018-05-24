console.log ("insite the JS!");
var counter=1;
var opacityRand=Math.random();
console.log("random");
console.log(opacityRand);
var iDiv = document.createElement('div');
var pClick = document.getElementById("pSign");
var pClass=document.getElementById("pSignClick");
var newSqr="<div></div>";
console.log((pClick));
console.log((pClass));
console.log ("insite thde JS!");
document.getElementById('pSign').onclick = function(){
        alert('image clicked');
     opacityRand=Math.random();
    console.log(opacityRand);
        counter++;
        console.log("new");
        console.log(counter);
        console.log((pClass));
        pClass.innerHTML += "<div></div>";
        console.log(pClass.lastChild);
        pClass.lastElementChild.style.opacity=opacityRand;
        pClass.style.opacity.lastChild=0.2;
        console.log( pClass.lastElementChild.sty)
        console.log("ask7");






    };



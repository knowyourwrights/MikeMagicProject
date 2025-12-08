
// copy lines 3-7 and just change fuction name 
document.getElementById("moreInfo").addEventListener("click",wand);

function wand(){
    window.open("wand.html","_blank");
}

document.getElementById("buy").addEventListener("click",purchase);

function purchase(){
    document.getElementById("purchase_").style.display="flex"; 
    
}

function reset1(){
document.getElementById("purchase_").style.display="none";
}

document.getElementById("moreInfo").addEventListener("click",wand);





function reset(){
document.getElementById("purchase3").style.display="none";

}

document.getElementById("moreInfo3").addEventListener("click",alex);

function alex(){
    window.open("groupwork.html","_blank");
}
document.getElementById("buy3").addEventListener("click",purchase3);

function purchase3(){
    document.getElementById("purchase3").style.display="flex"; 
    
}

document.getElementById("moreInfo2").addEventListener("click",Cloak);

function Cloak(){
    window.open("page3.html","_blank");
}

document.getElementById("buy2").addEventListener("click",purchase2);

function purchase2(){
    document.getElementById("purchase2").style.display="flex";
}

function reset3(){
document.getElementById("purchase2").style.display="none";
}
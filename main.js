
// copy lines 3-7 and just change fuction name 
document.getElementById("moreInfo").addEventListener("click",wand);

function wand(){
    window.open("wand.html","_blank");
}

document.getElementById("buy").addEventListener("click",purchase);

function purchase(){
    document.getElementById("purchase_").style.display="flex"; 
    
}



function reset(){
document.getElementById("purchase_").style.display="none";
}
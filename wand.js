
var counter = 1 ;

function nextImage() {
    counter++;

    if(counter == 1){ 
    document.getElementById("image").src="wand/wand1.png";
    }

    if(counter == 2){ 
    document.getElementById("image").src="wand/wand2.png";
    }

    if(counter == 3){ 
    document.getElementById("image").src="wand/wand3.png";
    }

     if(counter == 4){ 
    document.getElementById("image").src="wand/wand4.png";
    }


    if(counter > 4)
    {
       counter = 1;
        document.getElementById("image").src="wand/wand1.png"; 
    }
    console.log(counter);
    
    
}

function previousImage() {
    counter--;

    if(counter < 0){
        counter = 3;
        document.getElementById("image").src="wand/wand3.png";
    }


    if(counter == 1){ 
    document.getElementById("image").src="wand/wand1.png";
    }

    if(counter == 2){ 
    document.getElementById("image").src="wand/wand2.png";
    }




    if(counter == 3){ 
    document.getElementById("image").src="wand/wand3.png";
    }

    if(counter == 0){ 
    document.getElementById("image").src="wand/wand4.png";
    }

    
    

   
    
    
    console.log(counter);
}


document.getElementById("full").style.display="none";
document.getElementById("limit").style.display="none";
document.getElementById("forbid").style.display="none";



function levelChecker(){
    var level=document.getElementById("magicLevel").value;
    if (level>=100){
        document.getElementById("full").style.display="block";           
        document.getElementById("full").style.backgroundColor="green";  

       document.getElementById("limit").style.display="none";
    document.getElementById("forbid").style.display="none";   
    }

    else if (level<100 && level>=75)
    {
        document.getElementById("limit").style.display="block";
        document.getElementById("limit").style.backgroundColor="orange";

        document.getElementById("full").style.display="none";
        document.getElementById("forbid").style.display="none";
    }

    else
    {
        document.getElementById("forbid").style.display="block";
        document.getElementById("forbid").style.backgroundColor="red";

        document.getElementById("limit").style.display="none";
        document.getElementById("full").style.display="none";
    }
}

function changeStyle(){
//document.getElementById("style").href="wand2.css";

document.querySelectorAll("link").href.toggle("wand2.css")

//document.querySelectorAll("wand.css").href.toggle("wand2.css")
}


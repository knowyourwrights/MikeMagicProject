
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
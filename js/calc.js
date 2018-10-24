//Binary Addition Step Counter
let binAddStep = 0;
//Binary Section shown
let binShown = false;
let binAddShown = false;

let binary = document.getElementById("Binary");//Binary section
let btnBinary = document.getElementById("btnBinary");
btnBinary.addEventListener("click", function(){
    Display(binary,binShown);
});

let binAdd = document.getElementById("binAdd");
let btnBinAdd = document.getElementById("btnBinAdd");
btnBinAdd.addEventListener("click", function(){
    Display(binAdd,binAddShown);
});

//Toggle display of Binary section
function Display(sect,sectShown){
    if(sectShown == false){
        sect.removeAttribute("class", "hide");
        sectShown = true;

        if(sect == binary){
            binShown = sectShown;
        }
        else if(sect == binAdd){
            binAdd = sectShown;
        }

    }
    else{
        sect.setAttribute("class", "hide");
        sectShown = false;
        if(sect == binary){
            binShown = sectShown;
        }
        else if(sect == binAdd){
            binAdd = sectShown;
        }
    }
};
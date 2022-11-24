var clickButton = document.querySelector('#click-button')
var loading1 = document.querySelector('#loading')

loading1.style.display ="block"


function textLoaded(){
    console.log(loading1.style.display);
    if(loading1.style.display=="block"){

    loading1.style.display= "none";
    }
    else {
        loading1.style.display="block"

    }
}








clickButton.addEventListener('click',textLoaded)
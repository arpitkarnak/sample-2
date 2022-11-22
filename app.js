

var buttonOne = document.querySelector('#button1')
var buttonTwo = document.querySelector('#button2')
var input1 = document.querySelector('#input')
var output1 = document.querySelector('#output')


var currentSize= 12;


function increaseFont(){
    
   
    currentSize = currentSize + 2;
    // console.log(currentSize);
    output1.style.fontSize=currentSize+"px";
    output1.innerText = input1.value;

}


function descreaseFont(){

    currentSize = currentSize-2;
    output1.style.fontSize=currentSize+"px"

    output1.innerText = input1.value;
}








buttonOne.addEventListener('click',increaseFont)

buttonTwo.addEventListener('click',descreaseFont)





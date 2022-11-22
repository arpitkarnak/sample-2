//Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.


var userInput = document.querySelector('#user-input');
var buttonOne = document.querySelector('#button1');
var buttonTwo = document.querySelector('#button2');
var buttonThree = document.querySelector('#button3');

var output1 = document.querySelector('#output')



function convertIntoh1(){

    //var userInputValue = userInput.value;
    // userInput.style.fontSize ="1.8em"
    // userInput.style.fontWeight = "bolder"
    output1.style.fontSize ="1.8em"
    output1.style.fontWeight = "bolder"
    output1.innerText = userInput.value;


}

function convertIntoh2(){

    //var userInputValue = userInput.value;
    // userInput.style.fontSize ="1.6em"
    // userInput.style.fontWeight = "bolder"
    output1.style.fontSize ="1.6em"
    output1.style.fontWeight = "bolder"
    output1.innerText = userInput.value;


}

function convertIntoh3(){

    //var userInputValue = userInput.value;
    // userInput.style.fontSize ="1.4em"
    // userInput.style.fontWeight = "bolder"
    output1.style.fontSize ="1.4em"
    output1.style.fontWeight = "bolder"
    output1.innerText = userInput.value;


}











buttonOne.addEventListener('click',convertIntoh1)
buttonTwo.addEventListener('click',convertIntoh2)
buttonThree.addEventListener('click',convertIntoh3)
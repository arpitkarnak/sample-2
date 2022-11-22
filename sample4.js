// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.


var userInput = document.querySelector('#input')
var buttonOne = document.querySelector('#button1')
var buttonTwo = document.querySelector('#button2')
var buttonThree = document.querySelector('#button3')

var output1 = document.querySelector('#output')



function changeColorToRed(){
    output1.style.color = "red"
    output1.style.fontSize = "2em";
    output1.innerText = userInput.value
}


function changeColorToBlue(){
    output1.style.color = "blue";
    output1.style.fontSize = "2em";
    output1.innerText = userInput.value
}

function changeColorToGreen(){
    output1.style.color = "green"
    output1.style.fontSize = "2em";
    output1.innerText = userInput.value
}













buttonOne.addEventListener('click',changeColorToRed)
buttonTwo.addEventListener('click',changeColorToGreen)
buttonThree.addEventListener('click',changeColorToBlue)

var userInput = document.querySelector("#user-input");
var clickBtn = document.querySelector("#click-button");
var output1 = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function maKe(text) {
  return serverURL + "?" + "text=" + text;
}

function onClick() {
  var inputValue = userInput.value;
  try {
    fetch(maKe(inputValue))
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json, "line no 21");
        output1.innerText = json.contents.translated;
      });
  } catch (error) {
    // output1.innerText =error.message;
    console.log(error, "Line 26");
  }
}

clickBtn.addEventListener("click", onClick);

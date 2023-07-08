var inputTxt = document.querySelector("#input-txt");
var btnTranster = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/morse.json";

//
function getTranslationURL(text){
    return serverURL + "?" + "text="+text;
}

//error handle

function errorHandler(error){
    console.log("Error Occured!!");
    alert("Something went wrong with server! try again some time")
}


function clickHandler(){
    var inputText = inputTxt.value;
    
    //calling server for processimg==ng
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputTxt.innerText = translatedText;
        })
        .catch(errorHandler)
}
btnTranster.addEventListener("click", clickHandler);
 
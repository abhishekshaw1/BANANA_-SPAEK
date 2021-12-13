var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outPutDIv = document.getElementById("output");

var YodaUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
btnTranslate.addEventListener("click",handleClick);

function errorHandle (error){
    alert(`${error} Some Error occured please try after sometime`);
}

function generateUrl (input) {
    return YodaUrl+ "?" + "text=" + input ;
}

function handleClick(){
    // console.log(inputText.value);
    // outPutDIv.innerText = inputText.value;
    var url = generateUrl(inputText.value);
    fetch(url)
    .then(response => response.json())
    .then(json => outPutDIv.innerText = json.contents.translated)
    .catch(errorHandle)

    console.log(url)
}
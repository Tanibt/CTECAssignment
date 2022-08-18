function translateMe(){
    var translation = new XMLHttpRequest();

    translation.open("POST",translate_url, true);
    translation.setRequestHeader("Content-type", "application/json");
    var trans = document.getElementById("translateText").value;
    var payload={"text": trans};
    translation.send(JSON.stringify(payload));
    console.log(payload)
    translation.onload = function () {

        array = JSON.parse(translation.responseText);
        console.log(array);
        alert("Translation is:    " + array)
    };


}

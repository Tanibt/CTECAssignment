function loginMe() {

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST",login_url, true)
    loginUser.setRequestHeader("Content-Type","application/json");
    loginUser.onload = function() {
        var username = document.getElementById("usernameLogin").value;
        $('#loginModal').modal('hide');
        console.log(username);
        console.log("ok");
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false) {
            $('#successModal').modal('show');
            alert("Welcome," + username +"!");
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            document.getElementById("logoutMenu").style.display="block";
            document.getElementById("editMenu").style.display="block";
            sessionStorage.setItem("token",token.result);
            sessionStorage.setItem("token2", username);
        }
        else{
            $('#failModal').modal('show');
        }
    }
    if (document.getElementById("usernameLogin").value.length == 0) {
        alert("empty username")
        return false;
    }
    var username = document.getElementById("usernameLogin").value;
    if (document.getElementById("passwordLogin").value.length == 0) {
        alert("empty password")
        return false;
    }
    var password = document.getElementById("passwordLogin").value;
    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload));
    sendEmail();
}

function loginShowPassword() {
    var x = document.getElementById("passwordLogin");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function sendEmail(){
    var send = new XMLHttpRequest();

    send.open("POST",sns_url, true);
    send.setRequestHeader("Content-type", "application/json");
    var payload={"message": "Successfully Logged In"};
    send.send(JSON.stringify(payload));
    console.log(payload)
    send.onload = function () {
        array2 = JSON.parse(send.responseText);
        console.log(array2);
    };


}

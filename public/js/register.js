function registerMe() {

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "/profile", true)
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        $('#registerModal').modal('hide');
        $('#successModal').modal('show')
    }

    if (document.getElementById("username").value.length == 0) {
        alert("empty")
        return false;
    }
    var username = document.getElementById("username").value;

    if (document.getElementById("fullName").value.length == 0) {
        alert("empty")
        return false;
    }
    var fullName = document.getElementById("fullName").value;

    if (document.getElementById("password").value.length == 0) {
        alert("empty")
        return false;
    }
    var password = document.getElementById("password").value;

    if (document.getElementById("email").value.length == 0) {
        alert("empty")
        return false;
    }
    var email = document.getElementById("email").value;

    if (document.getElementById("phone").value.length == 0) {
        alert("empty")
        return false;
    }
    var phone = document.getElementById("phone").value;

    if (document.getElementById("no").value.length == 0) {
        alert("empty")
        return false;
    }
    var address = document.getElementById("no").value;

    if (document.getElementById("gender").value.length == 0) {
        alert("empty")
        return false;
    }
    var gender = document.getElementById("gender").value;

    var payload = { username: username, fullName: fullName, password: password, email: email, phone: phone, address: address, gender: gender }
    registerUser.send(JSON.stringify(payload));
}

function registerShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

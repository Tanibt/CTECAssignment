$(document).ready(function () {

    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "/user", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload=function (){
        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);
        fullName = profile[0].fullName;
        password = profile[0].password;
        email = profile[0].email;
        phone = profile[0].phone;
        address = profile[0].address;
        gender = profile[0].gender;
        username = profile[0].username;
        document.getElementById("profileusername").value=username;
        document.getElementById("password").value=password;
        document.getElementById("fullName").value=fullName;
        document.getElementById("email").value=email;
        document.getElementById("phone").value=phone;
        document.getElementById("address").value=address;
        document.getElementById("gender").value=gender;
    }

    var payload = {token : token};
    getProfile.send(JSON.stringify(payload));

})

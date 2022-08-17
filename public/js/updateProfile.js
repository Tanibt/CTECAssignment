function update(){

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT","http://127.0.0.1:8080/profile", true)
    updateUser.setRequestHeader("Content-Type","application/json");
    updateUser.onload = function() {
        $('#successModal').modal('show');
    }
    password = document.getElementById("password").value;
    fullName = document.getElementById("fullName").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;
    gender = document.getElementById("gender").value;
    var payload = {token:token, password:password, fullName:fullName, email:email,phone:phone,address:address,gender:gender}
    updateUser.send(JSON.stringify(payload));
    console.log(payload);
}

function deleteProfile(){

    var deleteUser = new XMLHttpRequest();

    deleteUser.open("DELETE","http://127.0.0.1:8080/profile", true)
    deleteUser.setRequestHeader("Content-Type","application/json");
    deleteUser.onload = function() {
        window.location.href="home.html";
        sessionStorage.removeItem("token");
    }
    var payload = {token:token};
    console.log(payload);
    deleteUser.send(JSON.stringify(payload));
}

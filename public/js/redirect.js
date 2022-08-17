$(document).ready(function (){

    var token = sessionStorage.getItem("token");
    if (token != null) {
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#logoutMenu').show();
        $('#editMenu').show();
        console.log(token)
    } else{
        window.location.href="home.html";
        $('#registerMenu').show();
        $('#loginMenu').show();
        $('#logoutMenu').hide();
        $('#editMenu').hide();
    }

})
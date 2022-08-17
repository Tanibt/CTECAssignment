function logoutMe() {

    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#editMenu').hide();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("token2");
    alert("You Have Successfully Logged Out");
}
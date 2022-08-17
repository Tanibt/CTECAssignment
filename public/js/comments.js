function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };

    request.send();
}


//This function is to display all the comments of that musics
//whenever the user click on the "comment" button
function showMusicComments(element) {
    document.getElementById("emptyComment").innerHTML = "<h2>Be the first one to Comment!</h2>";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + music_array[item].songName;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].musicId === music_array[item].musicId) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedMusicId = music_array[item].musicId;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-1">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <small>by " + comment_array[i].commentUsername + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/star.png' style='width:50px' />";
            }
            star += "<img src= 'images/delete.png' width='50px' height='40px' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' >";
            star += "<img src = 'images/edit.png' width='60px' height='50px' class='far fa-edit-alt fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' >";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function newComment() {
    var token = sessionStorage.getItem("token");
    if (token != null) {
        //Initialise each HTML input elements in the modal window with default value.
        rating = 0;
        document.getElementById("userComments").value = "";
        document.getElementById("nickname").value = sessionStorage.getItem("token2");
    }
    else {
        alert("Please Login to Comment");
        window.location.href = "home.html";
    }
}

// Submit or send the new comment to the server to be added.
function addComment() {
    var comment = new Object();
    comment.musicId = music_array[currentIndex].musicId; // musics ID is required by server to create new comment  // song title is required by server to create new comment
    comment.commentUsername = document.getElementById("nickname").value; // Value from token
    comment.review = document.getElementById("userComments").value; // Value from HTML input text
    comment.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    comment.rating = rating;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", add_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        console.log("new comment sent");
        console.log(postComment);
        fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment));
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // star images to use black and white.
    for (let star of stars) {
        star.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the star image.
function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}

function editComment(element) {
    var token = sessionStorage.getItem("token");
    if ((token != null)) {
        var item = element.getAttribute("item");

        currentIndex = item;
        if (comment_array[currentIndex].commentUsername == sessionStorage.getItem("token2")) {
            document.getElementById("editnickname").value = comment_array[item].commentUsername;
            document.getElementById("edituserComments").value = comment_array[item].review;
            console.log(comment_array[item]);
            displayColorStar('editpop', comment_array[item].rating);
            console.log(true);
        }
        else {
            alert("You Can Only Edit Your Own Comments!");
            window.location.href = "home.html";
        }
    }
    else {
        alert("Please Login To Edit comments");
        window.location.href = "home.html";
    }
}

//This function displayS the correct number of colored star
//based on the song rating that is given in the user comment
function displayColorStar(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_comment_url = update_url + "/" + comment_array[currentIndex].commentId;
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].commentUsername = document.getElementById("editnickname").value;
        comment_array[currentIndex].review = document.getElementById("edituserComments").value;
        comment_array[currentIndex].rating = rating;
        updateComment.onload = function () {
            fetchComments();
        };
        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}


//This function deletes the selected comment in a specific song
function deleteComment(element) {
    var token = sessionStorage.getItem("token");
    if (token != null) {
        var item = element.getAttribute("item");

        currentIndex = item;

        if (comment_array[currentIndex].commentUsername == sessionStorage.getItem("token2")) {

            var response = confirm("Are you sure you want to delete this comment?");

            if (response == true) {
                var item = element.getAttribute("item"); //get the current item
                var delete_comment_url = delete_url + "/" + comment_array[item].commentId;
                var eraseComment = new XMLHttpRequest();
                eraseComment.open("DELETE", delete_comment_url, true);
                eraseComment.onload = function () {
                    fetchComments();
                };
                eraseComment.send();
            }
        }
        else {
            alert("You Can Only Delete Your Own Comments");
            window.location.href = "home.html";
        }
    }
    else {
        alert("Please Login To delete comment");
        window.location.href = "home.html";
    }
}







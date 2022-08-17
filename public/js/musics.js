//This function is to call the musics api and get all the musics
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getMusicData() {
    var request = new XMLHttpRequest();
    request.open('GET', music_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the musics records into our music array        
        music_array = JSON.parse(request.responseText);
        //Fetch the comments as well        
        fetchComments();
        console.log(music_array) // output to console        
        //call the function so as to display all musics tiles      	
        displayMusics();
    };
    //This command starts the calling of the musics web api    
    request.send()
}

function getInfoData(){
    var request = new XMLHttpRequest();
    request.open('GET', music_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the musics records into our music array        
        music_array = JSON.parse(request.responseText);
        //Fetch the comments as well        
        console.log(music_array) // output to console        
        //call the function so as to display all musics tiles for "Now Showing"        	
        showMusicDetails();
    };
    //This command starts the calling of the musics web api    
    request.send()
}

function displayMusics() {
    var table = document.getElementById("musicsTable");
    var musicCount = 0;
    var message = "";

    table.innerHTML = "";
    totalMusics = music_array.length;
    for (var count = 0; count < totalMusics; count++) {
        var thumbnail = music_array[count].image;
        var title = music_array[count].songName;
        var cell= '<div class="flip-card" style="border-radius: 1cm;border-color: yellow;"><div class="flip-card-inner" style="border-radius: 1cm;">\
        <div class="flip-card-front" style="border-radius: 1cm;"><div class="w3-card-4"><div class="w3-container w3-center">\
        <img src="' + thumbnail + '" alt="Avatar" style="width: 350px;height: 250px;border-radius: 1cm;border: 2px solid pink;">\
        <p id="searchTitle" style="padding: 10px; border: 2px solid #FF6EF;background-color:#FF6EFF;border-radius: 1cm"><b>' + title + '</b></p></div></div></div>\
        <div class="flip-card-back" style="border-radius: 1cm;"><h1><div class="card-body" style="border-radius: 1cm;">\
        <button class="button-57" style="center;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showMusicComments(this)">\
        <span class="text">Comments</span><span>Review & Rate</span></button>\   <br> <br>  \
        <a href="musicsPage.html" onClick="count1('+ count +')"><button class="button-57" style="cursor:pointer">\
        <span class="text">See More</span><span>Music Info</span></button></a></div>\</div></h1></div></div></div>\
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;'
        table.insertAdjacentHTML('beforeend', cell);
        musicCount++;
    }
    message = "Music";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function filterGenre(element) {
    var table = document.getElementById("musicsTable");
    var musicCount = 0;
    var message = "";

    table.innerHTML = "";
    totalMusics = music_array.length;
    for (var count = 0; count < totalMusics; count++) {
        if (music_array[count].songGenre == element) {
        var thumbnail = music_array[count].image;
        var title = music_array[count].songName;
        var cell= '<div class="flip-card" style="border-radius: 1cm;border-color: yellow;"><div class="flip-card-inner" style="border-radius: 1cm;">\
        <div class="flip-card-front" style="border-radius: 1cm;"><div class="w3-card-4"><div class="w3-container w3-center">\
        <img src="' + thumbnail + '" alt="Avatar" style="width: 350px;height: 250px;border-radius: 1cm;border: 2px solid pink;">\
        <p id="searchTitle" style="padding: 10px; border: 2px solid #FF6EF;background-color:#FF6EFF;border-radius: 1cm"><b>' + title + '</b></p></div></div></div>\
        <div class="flip-card-back" style="border-radius: 1cm;"><h1><div class="card-body" style="border-radius: 1cm;">\
        <button class="button-57" style="center;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showMusicComments(this)">\
        <span class="text">Comments</span><span>Review & Rate</span></button>\   <br> <br>  <a href="musicsPage.html" onClick="count1('+ count +')">\
        <button class="button-57" style="cursor:pointer"><span class="text">See More</span><span>Music Info</span></button></a></div>\</div></h1></div></div></div>\
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;'
        table.insertAdjacentHTML('beforeend', cell);
        musicCount++;
        }
    }
    message = "Music";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}



function count1(count){
    sessionStorage.setItem("index",count)
}

//This function is to display the individual musics details
//whenever the user clicks on "See More"
function showMusicDetails() {
    var item = sessionStorage.getItem("index");
    console.log(item);
    document.getElementById("songTitle").textContent = music_array[item].songName;
    document.getElementById("songPoster").src = music_array[item].image;
    document.getElementById("info").textContent = music_array[item].songInfo;
    document.getElementById("genre").textContent = music_array[item].songGenre;
}

function restWebsite() {
    var item = sessionStorage.getItem("index");
    console.log(item);
    window.open(music_array[item].songLink, "_blank");
}

function searchMusics() {
    const input = document.getElementById('filter').value.toUpperCase();
    console.log(input);
    const cardContainer = document.getElementById('card-lists');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('flip-card');
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector("#searchTitle");
        console.log(title);
        console.log(title.innerText);

        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }
        
    }
}

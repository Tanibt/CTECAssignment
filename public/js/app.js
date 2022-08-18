var music_url = "/allMusics";
var music_array = []; // This creates an empty musics array
var musicCount = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of musics should be listed when the home page is first loaded. */
var currentIndex = 0;
var comment_url = "/allComments";
var add_url = "/addComment";
var update_url = "/updateComment";
var delete_url = "/deleteComment";  
var comment_array = []; // This creates an empty comment array
var profile_url = "/profile";
var profile_array = []
var login_url = "/login";
var login_array = []
var starBWImage = 'images/star_bw.png';
var starImage = 'images/star.png';
var rating = 0;
var translate_url = new URL("https://cors-anywhere.herokuapp.com/https://a04xh5sjed.execute-api.us-east-1.amazonaws.com/translate/translate")
var new_text="";
var sns_url = new URL("https://cors-anywhere.herokuapp.com/https://6prlrpbc6a.execute-api.us-east-1.amazonaws.com/sns/loginSNS")
var new_text2="";

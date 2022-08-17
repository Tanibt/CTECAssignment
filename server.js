var express = require("express"); //using the express web framework

var musicController = require('./controllers/musicController');
var commentController = require('./controllers/commentController');
var profileController = require('./controllers/profileController');
var cors = require('cors');
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express
app.use(cors());
app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.


//all route commands
app.route('/allMusics').get(musicController.getAllMusics);
app.route('/allComments').get(commentController.getComments);
app.route('/addComment').post(commentController.addComment);
app.route('/updateComment/:commentId').put(commentController.updateComment);
app.route('/deleteComment/:commentId').delete(commentController.deleteComment);
app.route('/profile').get(profileController.getAllProfiles);
app.route('/profile').post(profileController.addProfile);
app.route('/profile').put(profileController.updateProfile);
app.route('/profile').delete(profileController.deleteProfile);
app.route('/login').post(profileController.loginProfile);
app.route('/user').post(profileController.getProfile);


app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console 
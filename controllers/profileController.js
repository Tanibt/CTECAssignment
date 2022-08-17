"use strict";
const ProfilesDB = require('../models/ProfilesDB');
const Profile = require('../models/Profile');
var jwt = require('jsonwebtoken');
var secret = "somesecretkey";

var profilesDB = new ProfilesDB();

function getAllProfiles(request, respond) {
    profilesDB.getAllProfiles(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}
function addProfile(request, respond) {
    var password = request.body.password;
    var profile = new Profile(request.body.username,
        request.body.fullName, password,
        request.body.email, request.body.phone,
        request.body.address, request.body.gender);
    profilesDB.addProfile(profile, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })

};

function updateProfile(request, respond) {
    var fullName = request.body.fullName;
    var password = request.body.password;
    var email = request.body.email;
    var phone = request.body.phone;
    var address = request.body.address;
    var gender = request.body.gender;
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        profilesDB.updateProfile(decoded, fullName, password, email, phone, address, gender, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({ result: "invalid token" });
    }
}

function deleteProfile(request, respond) {
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        profilesDB.deleteProfile(decoded, function (error, result) {
            if (error) {
                respond.json(error)
            }
            else {
                respond.json(result)
            }
        });
    } catch (err) {
        respond.json({ result: "invalid token" });
    }
}

function loginProfile(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    profilesDB.loginProfile(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            if (result.length > 0) {
                const hash = result[0].password;
                var flag = (password == hash);
                if (flag) {
                    var token = jwt.sign(username, secret);
                    respond.json({ result: token });
                }
                else {
                    respond.json({ result: false });
                }
            }
            else{
                respond.json({result: false});
            }
        }
    })

};

function getProfile(request, respond) {
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        profilesDB.getProfile(decoded, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        })

    } catch (err) {
        respond.json({ result: "invalid token" });
    }



};



module.exports = { getAllProfiles, addProfile, updateProfile, deleteProfile, loginProfile, getProfile};
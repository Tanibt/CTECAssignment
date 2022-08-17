"use strict";

var db = require('../db-connections');
class ProfilesDB{
    getAllProfiles(callback){
        var sql = "SELECT * FROM musicity.profile";
        db.query(sql, callback);
    }

    addProfile(profile, callback){
        var sql = "INSERT INTO profile (username, fullName, password, email, phone, address, gender) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [profile.getUsername(), profile.getFullName(),
            profile.getPassword(), profile.getEmail(), 
            profile.getPhone(), profile.getAddress(), 
            profile.getGender()], callback);
    }

    getProfile(username, callback){
        var sql = "SELECT distinct username,fullName,password,email,phone,address,gender from musicity.profile WHERE username = ?";
        db.query(sql, [username], callback);
    }

    updateProfile(username, fullName, password, email, phone, address, gender, callback){
        var sql = "UPDATE profile SET fullName = ?, password = ?, email = ?, phone = ?, address = ?, gender = ? WHERE username = ?";
        return db.query(sql, [fullName, password, email, phone, address, gender, username], callback);
    }

    deleteProfile(username, callback){
        var sql = "DELETE from profile WHERE username = ?";
        return db.query(sql, [username], callback);
    }

    loginProfile(username, callback){
        var sql = "SELECT password FROM profile WHERE username = ?";
        db.query(sql, [username], callback);
    }
}

module.exports = ProfilesDB;
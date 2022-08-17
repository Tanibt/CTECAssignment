"use strict";

var db = require('../db-connections');
class MusicsDB{
    getAllMusics(callback){
        var sql = "SELECT * FROM musicity.music";
        db.query(sql, callback);
    }
}

module.exports = MusicsDB;
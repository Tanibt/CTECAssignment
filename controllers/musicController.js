"use strict";
const MusicsDB = require('../models/MusicsDB');

var musicsDB = new MusicsDB();

function getAllMusics(request, respond){
    musicsDB.getAllMusics(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}


module.exports = {getAllMusics};
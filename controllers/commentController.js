"use strict";
const Comment = require('../models/Comment');
const CommentsDB = require('../models/CommentsDB');


var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    var musicID = request.params.musicId;
    commentsDB.getAllComments(musicID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function getComments(request, respond){
    commentsDB.getComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addComment(request, respond)
{
    var now = new Date();
    var comment = new Comment(null, request.body.musicId, request.body.commentUsername,  
        request.body.review, request.body.rating, now);
    commentsDB.addComment(comment, function (error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })

};

function updateComment(request, respond){
    var now = new Date();
    var comment = new Comment(parseInt(request.params.commentId), request.body.musicId,
    request.body.commentUsername, request.body.review, request.body.rating, now);
    commentsDB.updateComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var commentID = request.params.commentId;
    commentsDB.deleteComment(commentID, function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    });
}

module.exports = {getAllComments,getComments, addComment,updateComment, deleteComment};
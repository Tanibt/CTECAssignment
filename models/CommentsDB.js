"use strict";

var db = require('../db-connections');
class CommentsDB{

    getComments(callback){
        var sql = "SELECT * from musicity.comment";
        db.query(sql, callback);
    }

    addComment(comment, callback){
        var sql = "INSERT INTO comment (musicId ,commentUsername, review, rating, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [comment.getMusicId(), comment.getCommentUsername(), comment.getReview(),
            comment.getRating(), comment.getDatePosted()], callback);
    }

    updateComment(comment, callback){
        var sql = "UPDATE musicity.comment SET review = ?, rating = ?, datePosted = ? WHERE commentId = ?";
        return db.query(sql, [comment.getReview(), comment.getRating(),
            comment.getDatePosted(), comment.getCommentId()], callback);
    }

    deleteComment(commentID, callback){
        var sql = "DELETE from comment WHERE commentId = ?";
        return db.query(sql, [commentID], callback);
    }
}

module.exports = CommentsDB;
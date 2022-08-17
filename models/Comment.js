"use strict";

class Comment
{
    constructor(commentId, musicId, commentUsername, review, rating, datePosted)
    {
        this.commentId = commentId;
        this.musicId = musicId;
        this.commentUsername = commentUsername;
        this.review = review;
        this.rating = rating;
        this.datePosted = datePosted;
    }

    getCommentId()
    {
        return this.commentId;
    }
    getMusicId()
    {
        return this.musicId;
    }
    getCommentUsername()
    {
        return this.commentUsername;
    }
    getReview()
    {
        return this.review;
    }
    getRating()
    {
        return this.rating;
    }
    getDatePosted()
    {
        return this.datePosted;
    }

    setMusicId(musicId)
    {
        this.musicId = musicId;
    }
    setCommentUsername(commentUsername)
    {
        this.commentUsername = commentUsername;
    }
    setReview(review)
    {
        this.review = review;
    }
    setRating(rating)
    {
        this.rating = rating;
    }
    setDatePosted(datePosted)
    {
        this.datePosted = datePosted;
    }
}

module.exports = Comment;
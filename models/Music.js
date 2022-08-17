"use strict";

class Music
{
    constructor(musicId, songName, songInfo, songGenre, songLink)
    {
        this.musicId = musicId;
        this.songName = songName;
        this.songInfo = songInfo;
        this.songGenre = songGenre;
        this.songLink = songLink;
    }

    getMusicId()
    {
        return this.musicId;
    }
    getSongName()
    {
        return this.songName;
    }
    getSongInfo()
    {
        return this.songInfo;
    }
    getSongGenre()
    {
        return this.songGenre;
    }
    getSongLink()
    {
        return this.songLink;
    }

    setSongName(songName)
    {
        this.songName = songName;
    }
    setSongInfo(songInfo)
    {
        this.songInfo = songInfo;
    }
    setSongGenre(songGenre)
    {
        this.songGenre = songGenre;
    }
    setSongLink(songLink)
    {
        this.songLink = songLink;
    }
}

module.exports = Music;
let playlist = ['song1', 'song2', 'song3', 'song4', 'song5'];

function addSong(song) {
    Playlist.unshift(song);
    return playlist;
};

function removeLastSong() {
    playlist.pop();
    return playlist;
};

function moveSongs() {
    playlist.copyWithin(playlist.length - 2, 0, 2);

    return playlist;
};

function combineSongs(playlist1) {
    combinedPLaylist = playlist.concat(playlist1);

    return combinedPLaylist;
};
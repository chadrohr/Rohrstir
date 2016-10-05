function MyTunesService() {
  var myTracks = loadTracks();
  var myPlayList = []
  var masterPlayList = []
  // pulls from itunes add builds PlayList sending to myTacks
  this.putTracks = function (arr) {
    masterPlayList = arr
    localStorage.setItem('masterPlayList', JSON.stringify(arr))
  }
  this.getTracks = function () {
    return loadTracks()

  }
  // Adds to my personal Playlist --myTracks
  this.addTrack = function (id) {
    // if(myPlayList.length == 0){
    //   myPlayList.push(song);
    // }
    for (var i = 0; i < masterPlayList.length; i++) {
      var song = masterPlayList[i];
      if (song.id == id) {
        myPlayList.push(song);/// Do I build full song here
        masterPlayList.splice(i, 1);
      }
    }
    saveTracks(myPlayList)
    return
  }

  // Removes track from my personal Playlist --myTracks
  this.removeTrack = function () {
    for (var i = 0; i < myPlayList.length; i++) {
      var song = myPlayList[i];
      if (song.id == id) {
        myPlayList.splice(i, 1);
        masterPlayList.push(song);
      }
    }
    saveTracks(myPlayList)
    return
  }

  //Moves track up in my personal Playlist --myTracks
  this.promote = function () {
    for (var i = 0; i < myPlayList.length; i++) {
      if (myPlayList[i].id == id) {
        break;
      }
    }
    if (i > 0) {
      myPlayList.splice(i - 1, 0, myPlayList.splice(i, 1)[0]);
    }
  }

  //moves track down in my personal Playlist --myTracks
  this.demoteTrack = function () {
    for (var i = 0; i < myPlayList.length; i++) {
      if (myPlayList[i].id == id) {
        break;
      }
    }
    myPlayList.splice(i + 1, 0, myPlayList.splice(i, 1)[0]);
  }
  this.clearData = function () {
    localStorage.removeItem('myPlayList')
  }
  function saveTracks(myTracks) {
    localStorage.setItem('myPlayList', JSON.stringify(myTracks))
  }
  function loadTracks() {
    myPlayList = localStorage.getItem('myPlayList')
    if (myPlayList) {
      myPlayList = JSON.parse(myPlayList)
    } else {
      // Which List should I pull from
      myPlayList = []//songs from somewhere
      // array of songs 
    }
    return myPlayList
  }
}

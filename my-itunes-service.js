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
    myPlayList = loadTracks()
    for (var i = 0; i < masterPlayList.length; i++) {
      var song = masterPlayList[i];
      
      if (song.id == id) {
        for(var h = 0; h< myPlayList.length; h ++){
         if(song.id == myPlayList[h].id){
           return
         }
      }
        myPlayList.push(song);/// Do I build full song here
    //    masterPlayList.splice(i, 1);
    }
    saveTracks(myPlayList)
    return
  }
  }

  // Removes track from my personal Playlist --myTracks
  this.removeTrack = function (id) {
    myPlayList = loadTracks()
    for (var i = 0; i < myPlayList.length; i++) {
      var song = myPlayList[i];
      if (song.id == id) {
        myPlayList.splice(i, 1);
       // masterPlayList.push(song);
      }
    }
    saveTracks(myPlayList)
    return
  }

  //Moves track up in my personal Playlist --myTracks
  this.promoteTrack = function (id) {
    myPlayList = loadTracks()
    for (var i = 0; i < myPlayList.length; i++) {
      if (myPlayList[i].id == id) {
        if (i > 0) {
          myPlayList.splice(i - 1, 0, myPlayList.splice(i, 1)[0]);
        }
      }
    }
    saveTracks(myPlayList)
    return
  }

  //moves track down in my personal Playlist --myTracks
  this.demoteTrack = function (id) {
    myPlayList = loadTracks()
    for (var i = 0; i < myPlayList.length; i++) {
      if (myPlayList[i].id == id) {
        break;
      }
    }
    myPlayList.splice(i + 1, 0, myPlayList.splice(i, 1)[0]);
    saveTracks(myPlayList)
    return
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
    }
    return myPlayList
  }
}

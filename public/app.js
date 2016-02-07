window.onload = function(){
  console.log('App started');
  var url = 'https://itunes.apple.com/search?term=jack+johnson&limit=5';
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function() {
    if (request.status === 200) {
      console.log("got the data");
      incomingData = JSON.parse(request.responseText);
      //console.log(incomingData.results[0].kind);
      displayResults(incomingData);
    }
  }

  request.send(null);

};

var displayResults = function(data) {
  for (var i = 0; i < data.results.length; i++) {
    console.log("Artist: ", data.results[i].artistName);
    console.log("Song: ", data.results[i].trackName);
    console.log("Rank: ", i+1);
  };

}

// var dataReceiver = function(response) {
//   console.log(response);
//   //window.data = response;
// }

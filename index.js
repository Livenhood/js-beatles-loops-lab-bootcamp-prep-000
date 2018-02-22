

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var together = [];
  for (var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i];
    together.push(sentence);
  }
return together;
}
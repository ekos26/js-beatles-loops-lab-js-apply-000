// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  
  for (var i = 0; i < arrMusicians.length; i++) {
    for (var j = 0; j < arrInstruments.length; j++) {
      arr.push(arrMusicians[i] + ' plays' arrInstruments[j]);
    }
  }
  return arr;
}
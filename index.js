// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  
  for (var i = 0; i < arrMusicians.length; i++) {
      arr.push(`${arrMusicians[i]} plays ${arrInstruments}`);
  }
  return arr;
}
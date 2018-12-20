// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  
  for (var i = 0; i < arrMusicians.length; i++) {
      arr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(arrFacts) {
  while (arrFacts.length > 0) {
    return arrFacts + '!!!'
  }
}
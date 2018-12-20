// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  const arr = [];
  
  for (let i = 0; i < arrMusicians.length; i++) {
      arr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return arr;
}




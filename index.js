function produceDrivingRange(blockRange){
  return function(start, end){
    let distance = parseInt(end) - parseInt(start)
    if(distance >= blockRange) {
      return(`${distance - blockRange} blocks out of range`)
    } else {
      return(`within range by ${blockRange - distance}`)
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(bill){
    return(tipPercentage * bill)
  }
}

function createDriver(name){
  let driverId = 0;
  return class Driver{
      constructor(name){
        this.name = name
        this.id = ++driverId
      }
    }
  }
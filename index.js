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


// createDriver returns a function that returns a class that produces a Driver class. The class has reference to
//  a driverId that is incremented each time a new driver is created. The rest of the code base does not have
//   access to driverId.

//first excercise - printing positive numbers (filter)

var arrOfNumbers = [1,2,4,-5,4,-8,9];
function isPositive(numbers) {
    return numbers > 0;
}

var positives = arrOfNumbers.filter(isPositive);

//first excercise - same thing with "for each"

var arrOfNumbers = [1,2,4,-5,4,-8,9];
var newArr = [];

function printPositive(arrOfNumbers) {
    arrOfNumbers.forEach(function(numbers) {
        if (numbers > 0){
          newArr.push(numbers)
        }
        });
  return newArr;
}


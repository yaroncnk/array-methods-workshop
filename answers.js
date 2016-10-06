//first excercise - printing positive numbers

var arrOfNumbers = [1,2,4,-5,4,-8,9];
function isPositive(numbers) {
    return numbers > 0;
}

var positives = arrOfNumbers.filter(isPositive);
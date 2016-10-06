//first excercise - positive numbers filtering with "for each"

var arrOfNumbers = [1, 2, 4, -5, 4, -8, 9];
var newArr = [];

function printPositive(arrOfNumbers) {
    arrOfNumbers.forEach(function(numbers) {
        if (numbers > 0) {
            newArr.push(numbers)
        }
    });
    return newArr;
}

//second excercise - printing positive numbers (filter)

var arrOfNumbers = [1, 2, 4, -5, 4, -8, 9];

function isPositive(numbers) {
    return numbers > 0;
}

var positives = arrOfNumbers.filter(isPositive);

//2B excercise - filter and print
var arrOfNumbers = [1, 2, 4, -5, 4, -8, 9];

function isPositive(numbers) {
    return numbers > 0;
}

arrOfNumbers.filter(isPositive).forEach(function(num) {
    console.log(num);
});

//ex. 3 - filterAway

var arrOfArguments = [true, false, true, false, false, true];

function checkTrue(arrOfArguments) { 
    return arrOfArguments === true; 
    }

function filterAway(arrOfArguments, callback) {
    return arrOfArguments.filter(callback);
  
}

console.log(filterAway(arrOfArguments, checkTrue));

//ex. 4 - finding the longest word in an array

function longestWord(sentence) {
    var newArray = sentence.split(" ");
    var hereItIs = newArray.reduce(function(prev,next) {
        if (next.length > prev.length) {
            return next;
        }

        else {
            return prev;
        }
    }, '');
    return hereItIs;
}
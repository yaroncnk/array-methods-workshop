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

//ex. 5 counting vowels in a string

 function howManyVowels(sentence) {
     var newArray = sentence.split("");
     var arrVowels = ['a', 'e', 'i', 'o', 'u'];
     var howManyVowels = newArray.reduce(function(sum, current) {
         if (arrVowels.indexOf(current) > -1) {
             return sum + 1;
         }
         else {
             return sum;
         }
     }, 0);
     return howManyVowels;
 }
 
 //ex. 6 finding the highest and the lowest numbers
 var nums = [1,2,6,77,-20,20,30];
 function highLow(nums) {
     var findMax = nums.reduce(function(obj, num){
       if (num > obj.highest){
             obj.highest = num;
         }
       if (obj.lowest > num)  {
             obj.lowest = num;
         }
         
       return obj;
     
     }, {
         highest : -Infinity,
         lowest: Infinity
     }); 
     return maxMin;
 }
 
 //ex. 7 finding the highest and the lowest numbers including second highest and lowest
 
 var nums = [1,2,6,77,-20,20,30];
 function highLow(nums) {
     var maxMin = {
         highest : -Infinity,
         secondHighest: highest ,
         lowest: Infinity,
         secondLowest: lowest,
     };
     var findMax = nums.reduce(function(obj, num){
       if (obj.highest < num){
             maxMin.highest = num;
             return {highest: num, lowest: Infinity, secondHighest: num, secondLowest: lowest};
         }
         else if (obj.lowest > num)  {
             maxMin.lowest = num;
             return {lowest: num, secondLowest: lowest};
         }
       else {
         return maxMin;
       }
     
     }, maxMin); 
     return maxMin;
 }
      var findMaxtwo = nums.reduce(function(obj, num){
       if (obj.secondHighest < num){
             maxMin.secondHighest = num;
             return {secondHighest: num, lowest: Infinity};
         }
         else if (obj.secondLowest > num)  {
             maxMin.secondLowest = num;
             return {secondLowest: num};
         }
       else {
         return maxMin;
       }
     
     }, maxMin); 
     return maxMin;
 }
 
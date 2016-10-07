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
     
     } 
     var maxMin = {
         highest : -Infinity,
         lowest: Infinity
     }
     }, maxMin); 
     return maxMin;
 }
 
 //ex. 7 finding the highest and the lowest numbers including second highest and lowest
 var maxMin = {
         highest : -Infinity,
         secondHighest: -Infinity,
         lowest: Infinity,
         secondLowest: Infinity
     };
 var nums = [1,2,6,77,-20,20,-12,30];
 
function highLow(nums) {
     var findMax = nums.reduce(function(obj, num){
       if (num > obj.highest){
             obj.highest = num; 
         }
       
       if (num > obj.secondHighest && num < obj.highest) {
         obj.secondHighest = num;
       }
      
       if (num < obj.lowest){
             obj.lowest = num;
         }
       if (num < obj.secondLowest && num > obj.lowest) {
         obj.secondLowest = num;
       }
         
       return obj;
    
     }, maxMin); 
     return maxMin;
}
 
//ex. 8 counting letters

/* algorithm:
1. Take a string (input)
2. Convert into an array that splits that letters
3. The function takes an empty object, and an array
4. If charcater X in the object = character(x) in the array - count 1 */

 var str = 'Shalom world';
 
function countLetters(str) {
    var newArr = str.split("")
     var countIt = newArr.reduce(function(obj, char){
       if (obj[char]){
             obj[char] = obj[char] + 1; 
       } else {
         obj[char] = 1;  
       } 
       
       return obj;
    
     }, {}); 
     return countIt;
}

//ex. 9 - peopleByID

var people = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]

function peopleById(people) {
     var buildObject = people.reduce(function(obj, person){
       if (!obj[person.id]){
             obj[person.id] = person;
             delete person.id;
       } 
       return obj;
    
     }, {}); 
     return buildObject;
}

//ex. 10  - grouping people by first name

var people = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]

function peopleByName(people) {
     var newArr = [];
     var buildObject = people.reduce(function(obj, person){
       if (!obj[person.name]){
             obj[person.name] = newArr.push(person);
       } 
       return obj;
    
     }, {}); 
     return buildObject;
}

//ex. 10 - an array of people
var people = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]

function peopleByName(people) {
     var buildObject = people.reduce(function(obj, person){
       var newArr = [];
       if (!obj[person.firstName]){
             
             newArr.push(person);
             obj[person.firstName] = newArr;
         
       }else {
        obj[person.firstName].push(person);
       }

       return obj;
    
     }, {}); 
     return buildObject;
}


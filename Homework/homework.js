// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  const getBiggest = Math.max (x, y)
  return getBiggest;
}

getBiggest (4, 5);

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German'){ 
    var greeting  = 'Guten Tag!';
  } 
     else if  (language === 'Mandarin'){
      var greeting = 'Ni Hao!';
    } 
       else if (language === 'Spanish'){
        var greeting =  'Hola!';
      } 
         else  {
          var greeting =  'Hello!';
      }
  return greeting;

} 
greeting ('Spanish');



function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if ((num === 10) || (num === 5)) {
  return true;
  }
  else {
  return false;
  }
}
isTenOrFive (6);

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false

  if ((num < 50) && (num > 20)) {
    return true;
  } 
  else {
  return false;
  }
}
isInRange (25);

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  //Number.isInteger
  if (Number.isInteger (num)){
  return true;
  }
  else {
    return false; 
  }

}
isInteger (-9);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  //if  (num = Math.floor((Math.random() * 1000 ) + 1 )) ; {
    //var output = "";
    if ((num % 3 === 0) && (num % 5 === 0)){
      var fizzBuzz = 'fizzbuzz';
    }
      else if (num % 3 === 0) {
        var fizzBuzz = 'fizz';
      }
        else if (num % 5 === 0) {
          var fizzBuzz = 'buzz';
        }
            else {
              return num;
            }
  return fizzBuzz;
    
}
fizzBuzz (10);

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num < 2) {
    return false
  }
    
    for(let i = 2 ; i < num; i ++) {
      if (num % i === 0){ 
        return false; 
      }
    }
  return true;
}
isPrime (1)
// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
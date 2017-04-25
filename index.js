// We'll start things off by creating a countdown() function.
// This function takes one argument, callback, which is a
// function. Using window.setTimeout(), we will wait two seconds
// before calling the callback function that was
// passed into the countdown() function.
// This exercise demonstrates the use of callbacks
// for async operations. If we
// didn't use a callback, our program would
// continue right away instead of waiting
// for the callback to be called.


//setTimeout(function, milliseconds, param1, param2, ...)
function countdown(callback) {
  window.setTimeout(callback, 2);
}

// Let's say we're trying to recreate Scrabble in JavaScript.
// Some board tiles can give us double or triple letter score.
// Let's create a helper function that takes a number
// (let's call it the multiplierValue). This function
// then returns a function that multiplies a given
// value by the multiplierValue. In your code, do the following:

// 1) Create a createMultiplier() function.
// Make sure it returns the right thing!

function createMultiplier(multiplierValue) { //multiplierValue is the number taken as an argument
  return function(num) { //this function has no name
    return multiplierValue * num;
  }
}

// 2) Create a doubler variable that uses the
// createMultiplier() function to create a function
// that doubles any given number.

var doubler = createMultiplier(2)
// doubler(5) -- this is in the spec, this returns 10, because:
//createMultiplier(2)(5) // -- this is another way of saying the above

// 3) Create a tripler variable that does the
// same thing as the doubler, but it triples the value instead.

var tripler = createMultiplier(3)


// To pass all tests, do the following:
// Create a multiplier() function that takes two arguments
// and multiplies them together.
// Create a doublerWithBind variable that partially
// applies the multiplier() function by passing in 2
// as its first argument.
// Create a triplerWithBind variable that partially
// applies the multiplier() function by passing in 3
// as its first argument.

function multiplier(num1, num2) {
  return num1 * num2
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)

// The bind() method creates a new function
// that, when called, has its this keyword
// set to the provided value, with a given
// sequence of arguments preceding any provided
// when the new function is called.
//
// SyntaxEDIT
// fun.bind(thisArg[, arg1[, arg2[, ...]]])

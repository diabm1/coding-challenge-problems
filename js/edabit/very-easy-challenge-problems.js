// intro challenge
function hello() {
  return "hello edabit.com";
}

//Buggy Code (Part 1)
function cubes(a) {
  return a ** 3;
}

//Convert Age to Days

// Create a function that takes the age in years and returns the age in days.

// Examples

// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

// Notes

//     Use 365 days as the length of a year for this challenge.
//     Ignore leap years and days between last birthday and now.
//     Expect only positive integer inputs.

function calcAge(age) {
  // takes the age in years and returns the age in days.
  // 1 year = 365 days
  // 65 years =
  //   var DOB = "mARCH 1, 1995";
  var millisecondsBetweenDOBAnd1970 = Date.parse(age);
//   console.log(millisecondsBetweenDOBAnd1970);
  var millisecondsBetweenNowAnd1970 = Date.now();
//   console.log(millisecondsBetweenNowAnd1970);
  var ageInMilliseconds =
    millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

  var milliseconds = ageInMilliseconds;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var year = day * 365;

  var years = Math.round(milliseconds / year);
  var months = years * 12;
  var days = years * 365;
  var hours = Math.round(milliseconds/hour)
  var seconds = Math.round(milliseconds/second)

  console.log(age)
}

calcAge(42);

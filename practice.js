// Task 1
// const height = 50;
// const width = 10;
// let area = height * width;
// console.log(`Area is ${area}`);

// Task 2
// const Diameter = 50;
// const Pi = 3.14;
// let radius = Pi * Diameter * 2;

// console.log(radius)

// Task 3

// const n = 16;
// let res = Math.sqrt(n);

// console.log(res);

// Task 4




// Максимум не включается, минимум включается
// console.log(Math.floor(Math.random() * 10))


// Task 5: Determine Pass or Fail
// Write a program that takes a student's score as input and determines whether
//  the student passed or failed a course. The passing score is 50 out of 100.
//   If the score is 50 or above, the program should print "Pass"; otherwise,
//    it should print "Fail".

// const score = 20;
// const goodScore = 50;

// if (score >= goodScore) {
//     console.log("Pass");
// }
// else {
//     console.log("Fail");
// }

// Task 6

// Categorize Age Group
// Create a program that categorizes a person's age group based on their age. 
// Use the following categories: "Child" (0-12), "Teen" (13-19), "Adult" (20-64), 
// and "Senior" (65+). The program should take an age as input and print the 
// corresponding age group.

// const Child = 12;
// const Teen = 19;
// const Adult = 64;
// let Age = 30;

// if (Age <= Child) {
//     console.log("Child")
// } 
// else if (Age <= Teen) {
//     console.log("Teen")
// }
// else if (Age <= Adult) {
//     console.log("Adult")
// }
// else  {
//     console.log("Senior")
// }

// Task 7

// Write a program that simulates a traffic light. The program should take the 
// color of the traffic light (red, yellow, or green) as input and print out an
// action: "Stop" for red, "Caution" for yellow, and "Go" for green.

// const trafficLight = "green";

// if (trafficLight === "green") {
//     console.log("Go");
// }
// else if (trafficLight === "yellow") {
//     console.log("Countion");
// }
// else if (trafficLight === "red") {
//     console.log("Stop")
// }
// else {
//     console.log("Doesn't work");
// }

// Create a program that reads the current temperature and classifies it as 
// "Cold" if the temperature is below 10 degrees Celsius, "Moderate" if it's 
// between 10 and 25 degrees Celsius, and "Hot" if it's above 25 degrees Celsius.
// The program should take the temperature as input and print out the 
// classification.

// const currentTemp = 10;

// const coldTemp = 9;
// const ModerateTemp = 24;


// if (currentTemp <= coldTemp) {
//     console.log("Cold");
// }
// else if (currentTemp >= 10 && currentTemp < 25) {
//     console.log("Moderate");
// }
// else {
//     console.log("Hot");
// }

// Task 5: Determine Leap Year
// Write a program that determines whether a given year is a leap year. 
// A year is a leap year if it is divisible by 4 but not by 100, unless 
// it is also divisible by 400. The program should take a year as input and 
// print "Leap Year" if it's a leap year, or "Common Year" if it's not.

// const year = 2024

// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     console.log("Leap Year")
// } else {
//     console.log("Common Year")
// }

// Print Numbers from 1 to 10: Use a `for` loop to print numbers 
// from 1 to 10 to the console.


// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// Sum of Numbers from 1 to N: Write a `for` loop that calculates 
// the sum of numbers from 1 to `N`, where `N` is a variable.
// let n = 5
// let summ = 0

// for (let i = 1; i <= n; i++) {
//      summ += i;
// }
// console.log(summ)



// Countdown Timer: Create a countdown from 10 to 1 using a `for` loop, printing each
// number to the console.

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }


// Iterate Through an Array: Use a `for` loop to iterate through an array of strings 
// and print each string to the console.

// const hardObj = {
//     level1: {
//       level2: [
//         { level3: [] },
//         {
//           level3: {
//             level4: [
//               [],
//               {
//                 level5: [
//                   {
//                     level6: {
//                       level7: [
//                         [],
//                         [],
//                         {
//                           level8: [
//                             { level9: [] },
//                             {
//                               level9: [
//                                 {},
//                                 {
//                                   level10: [
//                                     [],
//                                     {
//                                       level11: {
//                                         level12: [
//                                           { level13: [] },
//                                           { level13: { level14: [[], [], { level15: { level16: [{ level17: { level18: [{ level19: [{ level20: "You made it on hard object!" }] }] } }] } }] }  },
//                                           { level13: [] }]
//                                     }}
//                                         ]
//                                       }
//                            ] },
//                                     []
//                                   ]
//                                 },
//                                 {}
//                               ]
//                             }
//                             },
//                           ]
//                         }
//                       ]
//                     }
//                   },
//                   { level6: [] }
//                 ]
//               },
//   };

// console.log(
//     hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1]
//       .level9[1].level10[1].level11.level12[1].level13.level14[2].level15
//       .level16[0].level17.level18[0].level19[0].level20);


let arr = students.map((item) => {
    return 3;
  });
  console.log(arr);
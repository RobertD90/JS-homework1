// Secure the vault challenge:


// we will be declaring 3 variables that with keyword let
//these variables will be the result of a series of calculations:

// in the first calculation we are using a single multiplication
// let num1 = 5 * 2
// // the second only uses a subtraction
// let num2 = 100 - 60
// // the 3rd will rely on the modulo operator and multiplication to get the correct answer
// let num3 = 10 % 3 * 39

// we will console out the answer to see if the result is correct.
//console.log(num1, num2, num3)

// when the result is correct we can move to the 2nd part of the challenge
// we will be combining the numbers with the strings
// the string will be declared with a variable const this time but can be also declared with a variable let

const str = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

let num1 = 5 * 2; // this will result 10
// the second only uses a subtraction
let num2 = 100 - 60; // this will result 40
// the 3rd will rely on the modulo operator and multiplication to get the correct answer
let num3 = 10 % 3 * 39; // this will result 39
//when the string is reached by the TOE it will print it out with the corresponding numbert (num1,2,3)
// console.log(str, num1 + "-" + num2 + "-" + num3 + ".")

// the alert will actually show up in G.Crome as a pop-up window
alert(str + " " + num1 + "-" + num2 + "-" + num3 + ".")


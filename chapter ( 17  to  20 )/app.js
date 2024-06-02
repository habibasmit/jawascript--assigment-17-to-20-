/*   chapter ( 17 to 20 )  
Arrays and loop   */

/*  Question no #01 : Declare and initialize an empty multidimensional array. (Array of arrays)  */ 
//  var arr = [];

/*  Question no #02 : Declare and initialize a multidimensional array representing the following matrix: */
// var matrix = [
//      [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]];

// for(var i=0;i<3;i++){
//     for(var j =0;j<4;j++){
//         document.write(matrix[i][j]+' ')
//     }
//     document.write('<br>')
// }

/* Question no #03 : Write a program to print numeric counting from 1 to 10.  */
// for (var i = 1 ; i <= 10 ; i++ ){
//   document.write(i + " <br> ")
// }

/* Question no #04 : Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. */
// var number = prompt("Enter the number for multiplication table: ");
// var length = prompt("Enter the length of multiplication table: ");

// document.write("Multiplication table of " + number + " upto " + length + " : <br>");

// for (var i = 1; i <= length; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

/* Question no #05 :  Write a program to print items of the following array using for loop: */
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var fruit of fruits) {
//     document.write(fruit + '<br>');
// }
// document.write('<br>');
// for (var [index, fruit] of fruits.entries()) {
//     document.write('Element at index ' + index + ' is ' + fruit + '<br>');
// }

/* Question no #06 : Generate the following series in your browser. See example output.  */
/* a) Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 */
//  for (var i = 1; i <= 15; i++) {
//         document.write(i);
//         if (i < 15) {
//             document.write(", ");
//         }
// }

/* b)  Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1  */
// for (var i = 10; i >= 1; i--) {
//     document.write(i);
//     if (i > 1) {
//         document.write(", ");
//     }
// }

/* c)  Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  */
//   for (var i = 0; i <= 20; i += 2) {
//         document.write(i);
//         if (i < 20) {
//             document.write(", ");
//         }
//      }

/* d) Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 */
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i);
//     if (i < 19) {
//         document.write(", ");
//     }
// }

/* e)  Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k");
//     if (i < 20) {
//         document.write(", ");
//     }
// }

/*  question no #07 : You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: */
 // Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// userInput = userInput.toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         break;
//         // continue; 
//     }
// }
// if (found) {
//     alert("Yes, the item is found in the list.");
// } else {
//     alert("No, the item is not found in the list.");
// }

/* question no 08 : Write a program to identify the largest number in the given array.  */
// Array of numbers
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largest);

/* question non 09 : Write a program to identify the smallest number in the given array. */
// Array of numbers
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallest);
 
/* question non 10 : Write a program to print multiples of 5 ranging 1 to 100.  */
   // Loop through numbers from 1 to 100
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }


/*  ============ chapter ( 17  to  20 )  end  =========== */
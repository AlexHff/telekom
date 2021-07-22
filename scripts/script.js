// // Concatenate two words with one empty space between them
// 
// function concatenate(a, b) {
//   var lastChar = a[a.length - 1];
//   var firstChar = b[0];
//   if (lastChar !== " " && firstChar !== " ") {
//     return a + " " + b;
//   } else if (lastChar === " " && firstChar === " ") {
//     return a + b.substring(1);
//   } else {
//     return a + b;
//   }
// }
// 
// function concat(a, b) {
//   var lastChar = a[a.length - 1];
//   var firstChar = b[0];
//   if (lastChar === " ") {
//     a = a.substring(0, a.length - 1);
//   }
//   if (firstChar === " ") {
//     b = b.substring(1);
//   }
//   return a + " " + b;
// }
// 
// console.log(concat("Hello", "World")); // OK
// console.log(concat("Hello ", "World")); // OK
// console.log(concat("Hello", " World")); // OK
// console.log(concat("Hello ", " World")); // OK
// console.log(concat("Hello ", "     World")); // NOT OK
// 
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// 
// var i = 0;
// 
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// 
// var arr = [1, 7, 3, 5];
// var sum = 0;
// var max = Number.NEGATIVE_INFINITY;
// var min = Number.POSITIVE_INFINITY;
// var mean = 0;
// 
// for (var i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// 
// if (arr.length !== 0) {
//   mean = sum / arr.length;
// }
// 
// var a = [
//   ["2", "5", "6"],
//   ["2", "5", "6"],
//   ["2", "5", "6"],
// ];
// 
// //        j j j
// //        = = =
// //        0 1 2
// // i = 0  a b c
// // i = 1  d e f
// // i = 2  g h i
// 
// for (var i = 0; i < a.length; i++) {
//   for (var j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }






















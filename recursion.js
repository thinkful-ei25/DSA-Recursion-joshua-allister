'use strict';

// function countSheep(n){
//   if(n === 0){
//     return;
//   }
//   else{
//     console.log(n + ' - Another sheep jump over the fence');
//     countSheep(n-1);
//   }
// }

// countSheep(3);

// function arrayDouble(arr) {
//   if (!arr.length) {
//     return [];
//   }
  
//   return [arr[0] * 2, ...arrayDouble(arr.slice(1))]
// }

// const arr1 = [1, 2, 3];

// console.log(arrayDouble(arr1));

// function reverse(str){
//   if(str.length === 0){
//     return '';
//   }
//   return (str[str.length -1] + reverse(str.slice(0,str.length-1)));
// }

// console.log(reverse('reverse'));


// function triangleNumber(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return n + triangleNumber(n-1);
// }

// console.log(triangleNumber(10));


// function splitter(str, separator){
//   if(!(str.indexOf(separator))){
//     return str;
//   }
//   return [str.slice(0, str.indexOf(separator)), ...splitter(str.slice(str.indexOf(separator), separator))];
// }

// console.log(splitter('this is split by spaces', ' '));

// function splitter(str, separator){
//   if(str.indexOf(separator) === -1){
//     return [str];
//   }
//   return [str.slice(0, str.indexOf(separator)), ...splitter(str.slice(str.indexOf(separator)+1, str.length), separator)];
// }
// console.log(splitter('ae/i/ou d dwjow/hi', '/'));

// function binaryRep(num) {
//   if (num < 1) {
//     return '';
//   }
//   return binaryRep(Math.floor(num/2)) + num % 2
// }


// console.log(binaryRep(100))

// function factorial(num){
//   if(num === 0){
//     return 1;
//   }
//   return num * factorial(num-1);
// }

// console.log(factorial(2));

// function fibonacci(num) {
//   if (num <= 2) {
//     return 1
//   }
  
//   return fibonacci(num-2) + fibonacci(num-1);

// }

// console.log(fibonacci(7))

/*
take first letter, add every possibility of remaining
 eats, east, esat, ests, etas, etsa
 aets, aest, ates, atse, aset, aste
*/

// function anagrams(word, prefix){
//   if (prefix > word.length){
//     return;
//   }



// }

function anagrams(word){
  let grams = [];
  if(word.length === 1){
    grams.push(word);
    return grams;
  }
  for(let i = 0; i < word.length; i++){
    let first = word[i];
    let rest = word.slice(0, i) + word.slice(i+1);
    let inner = anagrams(rest);
    for(let j = 0; j < inner.length; j++){
      grams.push(first + inner[j]);
    }
    
  }
  return grams;
}

console.log(anagrams('east'));
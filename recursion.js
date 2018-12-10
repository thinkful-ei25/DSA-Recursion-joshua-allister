'use strict';

function countSheep(n){
  if(n === 0){
    return;
  }
  else{
    console.log(n + ' - Another sheep jump over the fence');
    countSheep(n-1);
  }
}

countSheep(3);

function arrayDouble(arr) {
  if (!arr.length) {
    return [];
  }
  
  return [arr[0] * 2, ...arrayDouble(arr.slice(1))]
}

const arr1 = [1, 2, 3]

console.log(arrayDouble(arr1))

function reverse(str){
  if(str.length === 0){
    return '';
  }
  return (str[str.length -1] + reverse(str.slice(0,str.length-1)));
}

console.log(reverse('reverse'));
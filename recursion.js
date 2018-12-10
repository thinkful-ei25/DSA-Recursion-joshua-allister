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
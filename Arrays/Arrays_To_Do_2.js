// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy

 
 var arr = [1, 2, 3, 4, 5,0];

function Reverse(arr){
 for(let i = 0; i<(arr.length)/2; i++){
     var x = arr[i];
     arr[i] = arr[ (arr.length-1) - i];
     arr[(arr.length-1) - i] = x;
 }
 return arr;
}

 console.log(Reverse(arr));

 //////////////////////////////////////////////////////////
 
//  Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.copy

 function FilterRange(arr, min, max) {
    var left = 0;
    var right = 0;
  
    while (right < arr.length) {
      if (arr[right] >= min && arr[right] <= max) {
        arr[left] = arr[right];
        left++;
      }
      right++;
    }
      arr.length = left;
  
    return arr;
  }
  
var arr = [3, 7, 2, 5, 9, 1, 4];
var min = 1;
var max = 5;

var result = FilterRange(arr, min, max);
console.log(result);  

////////////////////////////////////////////

// Concat

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].copy

function arrConcat(arr1, arr2) {
  var newArray = [];

  for (var i = 0; i < arr1.length; i++) {
    newArray[newArray.length] = arr1[i];
  }

  for (var j = 0; j < arr2.length; j++) {
    newArray[newArray.length] = arr2[j];
  }

  return newArray;
}

var arr1 = ['a', 'b'];
var arr2 = [1, 2];

var result = arrConcat(arr1, arr2);
console.log(result);  

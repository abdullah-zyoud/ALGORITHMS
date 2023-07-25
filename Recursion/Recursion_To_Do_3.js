// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array.

// rBinarySearch([1,3,5,6],4) = false;

// rBinarySearch([4,5,6,8,12],5) = true.

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] == target) {
    return true;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}
console.log(binarySearchRecursive([1, 2, 5, 7, 9], 9));
/////////////////////////////////////////////////
// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common
// Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach.
//  You should  be able to compute rGCF(123456,987654).

function rGCF(num1, num2) {
  if (num1 === num2) {
    return num1;
  }
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return 2 * rGCF(num1 / 2, num2 / 2);
  } else if (num1 % 2 === 0) {
    return rGCF(num1 / 2, num2);
  } else if (num2 % 2 === 0) {
    return rGCF(num1, num2 / 2);
  } else {
    const diff = Math.abs(num1 - num2);
    return rGCF(diff / 2, Math.min(num1, num2));
  }
}

console.log(rGCF(123456, 987654));
///////////////////////////////////////////////
// The Tarai (Japanese: “to pass around”) function was created to profile recursive performance in various systems and languages. Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant. The tarai function accepts three parameters and is defined as:

// tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
// tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).
// Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).

function tarai(x, y, z) {
    if (x <= y) {
      return y;
    } else {
      return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
    }
  }
  
  console.log(tarai(10, 2, 9)); 

  ///////////////////////////////////////////////////

//   String: In-Order Subsets
// Create strSubsets(str). Return an array with every possible in-order character subset of str.
//  The resultant array itself need not be in any specific order – it is the subset of letters in each 
//  string that must be in the same order as they were in the original string. Given "abc",
//  return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).


  function strSubsets(str) {
    const subsets = [];
  
    function generateSubsets(currentSubset, index) {
      if (index === str.length) {
        subsets.push(currentSubset);
        return;
      }
  
      generateSubsets(currentSubset, index + 1); 
      generateSubsets(currentSubset + str[index], index + 1); 
    }
  
    generateSubsets('', 0);
    return subsets;
  }
  
  console.log(strSubsets('abc'));
  
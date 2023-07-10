// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.

// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverseString(str) {
    var reversed = '';
  
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  var str = "creature";
var reversedStr = reverseString(str);
console.log(reversedStr);  
/////////////////////////////////////////////////
// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing

// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].

function removeEvenLengthStrings(arr) {
    // var newArr = [];
  
    for (var i =0; i <arr.length; i++) {
        var newArr=arr[i];
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j]==' ') {
                continue
                
            }
            

            
        }
      if (arr[i].length % 2 == 0) {
        arr.pop(arr[i]);
      }
    }
  
    return arr;
  }
  
  
  var arr = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", ".."];
  var result = removeEvenLengthStrings(arr);
  console.log(result);  // Output: ["Nope!", "Its", "Chris", "."]
  
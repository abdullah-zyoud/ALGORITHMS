// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

arr=[1,2,4,0,5,7,2,3,4]

function minToFront(arr){
    let min =arr[0];
    let x =0;
    for (var i=0;i<arr.length;i++){
        if(min > arr[i]){
            min =arr[i];
            x=i;
        }
    }

    for( var j=x;j>0;j--){
        var temp =arr[j];
        arr[j]=arr[j-1];
        arr[j-1]=temp;
        
        
    }
    return arr

}
console.log(minToFront(arr));


////////////////////////////////////////////////////////////////
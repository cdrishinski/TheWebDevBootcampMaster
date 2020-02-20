// printReverse - takes an array as argument and prints out elements in reverse order(don't reverse array itself)

var backward = ["hey", 3, true, 5, "hola"];


printReverse(backward);

function printReverse (backward) {
    //reverse the array provided
    var newBackward = [];

    backward.forEach(function(x){
      newBackward.unshift(x);
    })

     //console.log that array 
    console.log(newBackward);
    console.log(backward);
}


//isUniform - takes an array and returns true if all elements in the array are identical

//create array to be tested
var sameOrNo = [2, 2, 2, 2, 2]

isUniform(sameOrNo);

//create function to test if it's identical
function isUniform(sameOrNo) {

    //loop through array, starting in position 1, and compare item to one behind it
    var isGood = true;

    for(var i = 1; i < sameOrNo.length; i++) {
        // console.log(sameOrNo[i]);
        // console.log(sameOrNo[i-1]);

     if(isGood === false){
         console.log(isGood);
         break; 
    } else{
        if (sameOrNo[i] !== sameOrNo[i-1]) {
            isGood = false;
           }
        }

    
    }
    if(isGood === true){
        console.log(isGood);
    }}




//sumArray - accepts array of numbers and returns the sum of all numbers in the array
var arrSum = [1, 2, -3, 100]

sumArray(arrSum);

function sumArray (arrSum) {
    var total = 0;

//loop through each number, add to total

    arrSum.forEach(function(y, i) {
        total += arrSum[i];
    })

//console.log the total of the array
    console.log(total);


}


//max - accepts an array of numbers and returns the biggest number in the array

var arrMost = [1, 10, 50, 500, 3000];

max (arrMost);

function max (arrMost) {

    var highest = arrMost[0];

    //  loop through passed array
    arrMost.forEach(function(z, j){
        if( arrMost[j+1] > arrMost[j]) {
            highest = arrMost[j+1];
        }

    })
    console.log(highest);


}
//isEven returns T or F when number is input

// var test = 3;

// function isEven (test) {
//     if (test % 2===0) {
//         console.log(true);
//         return true;
//     }
//     else {
//         console.log(false);
//         return false;
//     }
// }

// isEven(test);

//factorial

var fact = 10;
var solution = 1;

function factorial (fact) {
for (var i = fact; i >= 1; i--) {
    solution = solution * i;
   
        }
    console.log(solution);
    return(solution);
}

factorial(fact)

//kebabToSnake
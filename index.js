//! THE SUM OF A RANGE
// The introduction of this book alluded to the following as a nice way to compute 
// the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an 
// array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of 
// these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument 
// that indicates the “step” value used when building the array. If no step is given, 
// the elements go up by increments of one, corresponding to the old behavior. The 
// function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works // with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step = 1) {
    arr = [];
    let i = start;

    if (i <= end) {
        while (i <= end) {
            arr.push(i);
            i += step;
        }
        return arr;
    } else if (i >= end) {
        while (i >= end) {
            arr.push(i);
            i += step;
        }
        return arr;
    }
}

// function range(start, end, step = start < end ? 1 : -1) {
//     let arr = [];
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//         for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return arr;
// }

function sum(arr) {
    let total = 0;

    for (let element of arr) {
        total += element;
    }

    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//! REVERSING AN ARRAY
// Arrays have a reverse method that changes the array by inverting the order in which 
// its elements appear. For this exercise, write two functions, reverseArray and 
// reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces 
// a new array that has the same elements in the inverse order. The second, 
// reverseArrayInPlace, does what the reverse method does: it modifies the array given 
// as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous 
// chapter, which variant do you expect to be useful in more situations? Which one runs 
// faster?

function reverseArray(arr) {
    let newArr = [];
    for (let element of arr) {
        newArr.unshift(element);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


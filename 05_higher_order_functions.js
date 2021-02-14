//! FLATTENING 
// Use the reduce method in combination with the concat method to “flatten” an array 
// of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((accumulator, current) => accumulator.concat(current), []));
// → [1, 2, 3, 4, 5, 6]

//! YOUR OWN LOOP
// Write a higher-order function loop that provides something like a for loop statement. 
// It takes a value, a test function, an update function, and a body function. Each iteration, 
// it first runs the test function on the current loop value and stops if that returns false.
// Then it calls the body function, giving it the current value. Finally, it calls the update 
// function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

// function loop(value, test, update, body) { 
//     if (!test(value)) return false;

//     body(value);

//     let newValue = update(value);
//     return loop(newValue, test, update, body);
// }

function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//! EVERYTHING
// Analogous to the some method, arrays also have an every method. This one returns true when 
// the given function returns true for every element in the array. In a way, some is a version 
// of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters. 
// Write two versions, one using a loop and one using the some method.

// function every(array, test) {
//     for (let element of array) {
//         if (!test(element)) return false;
//     }
//     return true;
// }

function every(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//! DOMINANT WRITING DIRECTION
// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be "ltr" (left to 
// right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a 
// script associated with them. The characterScript and countBy functions defined earlier 
// in the chapter are probably useful here.

function dominantDirection(text) {
  let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";
  
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}  

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
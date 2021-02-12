// LOOPING A TRIANGLE
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function loopingTriangle() {
    for (let line = "#"; line.length < 8; line += "#") {
        console.log(line);
    }
}

loopingTriangle();
let n = 100; 
let simpleArray = [];

function isSimple(number) {
    for (let i = 2; i <= number/2; ++i) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
while (simpleArray.length <= 100) {
    for (let j = 1; j <= Math.pow(n, n); j++) { 
        if (isSimple(j) === true) {
            simpleArray.push(j);
        }
    }
}
console.log(simpleArray);
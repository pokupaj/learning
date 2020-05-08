let a = [5, 2, -1, 9];
let min = a[0];
let max = a[0];

for (let x of a) {
    if (x > max) {
        max = x;
    };
    if (x < min) {
        min = x;
    }
}

console.log('min = ', min);
console.log('max = ', max);
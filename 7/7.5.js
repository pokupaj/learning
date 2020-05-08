let a = [-2, 10, -5, -1, 2, 6];
let b = [];

for (x of a) {
    if (x>0) {
        b.push(x);
    }
}

console.log(b);

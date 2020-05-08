let a = [1, 4, 10, 10, 4, 2, 10, 0];
let b = [];

for (x of a) {
    if (!b.includes(x)) {
        b.push(x);
    }
}

console.log(b);
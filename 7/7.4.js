let a = [-2, 10, -5, -1, 2, 6];
let count = 0; 

for (x of a) {
    if (x>0) {
    count += 1;
    };
}

console.log('count =', count);
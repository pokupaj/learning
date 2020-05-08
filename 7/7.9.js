let a = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 0];
let sequenceLength = 0;
let countSequence = 1;

for (let i=1; i<a.length; ++i) {
    if (a[i]>a[i-1]) {
        countSequence += 1;
        if (countSequence>=sequenceLength) {
            sequenceLength = countSequence;
        }
    } else {
        countSequence = 1;
    }
}

console.log('Длина ', sequenceLength)

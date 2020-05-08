let a = [7, 2, 3, 0];
let min = a[0];
let max = a[0];
let minIndex = -1;
let maxIndex = -1;

for (i=0; i<a.length; ++i) {
    if (a[i] >= max) {
        max = a[i];
        maxIndex = i; 
    };
    if (a[i] <= min) {
        min = a[i];
        minIndex = i;
    }
}

a[minIndex] = max;
a[maxIndex] = min;

console.log(a);
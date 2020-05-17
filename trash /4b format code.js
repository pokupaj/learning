if (a>b) {
    process.stdout.write(String(a));
    for (let i = 0; i < 10; ++i) {
        if (a>i) {
            process.stdout.write(String(i))
        } else if (i == 0) {
            process.stdout.write('0');
        }
    }
} else {
    for (let i = 0; i < 10; ++i) {
        process.stdout.write('a<b');
    }
} 
process.stdout.write('конец программы');

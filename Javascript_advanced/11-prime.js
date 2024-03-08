//counts the number of primes a 100 times, calculates them at the end of the excution stack, and tell you how long it took

function countPrimeNumbers() {
    let primes = 0;
    let i = 2


    for (; i <= 100; i++) {
        let isPrime = true;
        let j = 2

        for (; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes++;
        }
    }

    return primes;
}

let c = 0;
let startTime = window.performance.now();

for (i = 0; i < 100; i++) {
    setTimeout(() => {
        countPrimeNumbers();
        c++;

        if (c === 100) {
            let endTime = window.performance.now() - startTime;
console.log(`Execution time of calculating prime numbers 100 times was ${endTime.toFixed(16)} milliseconds`);
        }
    }, 0);
}
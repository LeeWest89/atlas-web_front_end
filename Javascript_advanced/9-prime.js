// counts the number of primes and tell you how long it took

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

let startTime = window.performance.now();
countPrimeNumbers();
let endTime = window.performance.now() - startTime;
console.log(`Execution time of printing countPrimeNumbers was ${endTime.toFixed(16)} milliseconds`);
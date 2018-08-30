(function () {
    const MIN_AGE = 18;

    function checkAge1(age) {
        age > MIN_AGE ? true : confirm('checkAge1: Родители разрешили?');
    }

    function checkAge2(age) {
        return age > MIN_AGE || confirm('checkAge2: Родители разрешили?');
    }

    function checkMinOfTwo(a, b) {
        const min = a < b ? a : b;

        console.log(`Минимальное значение из [${a}, ${b}]: ${min}`);
        return min;
    }

    function pow(x, n) {
        let result = x;

        for (let i = 1; i < n; i++) {
            result *= x;
        }

        console.log(`Возведение ${x} в степень ${n} = ${result}`);
        return result;
    }

    // Рекурсия
    function sumTo(x) {
        if (x !== 1) {
            return x + sumTo(x - 1);
        }
        return 1;
    }

    function factorial(x) {
        if (x !== 1) {
            return x *= factorial(x - 1);
        }
        return x;
    }

    function fib(x) {
        let a = 1;
        let b = 1;
        let c;

        for (let i = 3; i <= x; i++) {
            c = a + b;
            a = b;
            b = c;
        }

        return b;
    }

    window.functions = {
        checkAge1: checkAge1,
        checkAge2: checkAge2,
        checkMinOfTwo: checkMinOfTwo,
        pow: pow,
        sumTo: sumTo,
        factorial: factorial,
        fib: fib
    };
})();

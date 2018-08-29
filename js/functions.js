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

    window.functions = {
        checkAge1: checkAge1,
        checkAge2: checkAge2,
        checkMinOfTwo: checkMinOfTwo,
        pow: pow
    };
})();

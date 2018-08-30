(function () {
    function initFunctionsModule() {
        const AGE = 18;
        const NUMBER_SUM_TO = 3;
        const FACTORIAL_NUMBER = 4;
        const FIB_NUMBER = 77;
        const { checkAge1, checkAge2, checkMinOfTwo, pow, sumTo, factorial, fib } = window.functions;

        checkAge1(AGE);
        checkAge2(AGE);

        checkMinOfTwo(2, 5);

        pow(2, 5);

        console.log(`Сумма до ${NUMBER_SUM_TO} = ${sumTo(NUMBER_SUM_TO)}`);

        console.log(`${FACTORIAL_NUMBER}! = ${factorial(FACTORIAL_NUMBER)}`);

        console.log(`Числа Фибоначчи ${FIB_NUMBER} = ${fib(FIB_NUMBER)}`);
    }

    initFunctionsModule();
})();

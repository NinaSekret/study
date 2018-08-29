(function () {
    function initFunctionsModule() {
        const AGE = 18;
        const { checkAge1, checkAge2, checkMinOfTwo, pow } = window.functions;

        checkAge1(AGE);
        checkAge2(AGE);

        checkMinOfTwo(2, 5);

        pow(2, 5);
    }

    initFunctionsModule();
})();

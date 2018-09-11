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

    console.log(`\nObjects:\n\n`);

    let obj = {};

    console.log(objects.isEmpty(obj));

    obj.name = 'Vasya';

    console.log(objects.isEmpty(obj));

    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };

    console.log(`Сумма з.п.: ${objects.sumSalaries(salaries)}`);
    console.log(`Сотрудник с высшей зп: ${objects.getPersonWHigherSalary(salaries)}`);

    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    console.log('Умножить численные значения объекта на 2:');
    console.log(objects.multiplyNumeric(menu));
    thisWord.calc.read();

    thisWord.ladder.up().up().down().up().down().showStep();

    console.log('\n========Closures===========');
    console.log(`Sum: ${closure.sum(2)(4)}`);

    let arr = [1, 2, 3, 4, 5, 6, 7];

    console.log(arr.filter(closure.inBetween(3, 6)));
    console.log(arr.filter(closure.inArray([1, 2, 10])));

    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    console.log(users.sort(closure.byField('name')));
    console.log(users.sort(closure.byField('age')));

    const fruits = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    console.log(`Random fruits array element: ${arrays.getRandomArrEl(fruits)}`);

    const findArr = ["test", 2, 1.5, false];
    console.log(`Search for element index in array: ${arrays.find(findArr, 1.5)}`);

    const filterArr = [5, 4, 3, 8, 0];
    console.log(`Filter array: ${arrays.filterRange(filterArr, 3, 5)}`);

    console.log(`Решето Эратосфена: ${arrays.sumSimpleNumbers(100)}`);
})();

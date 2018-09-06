(function () {
    function initFunctionsModule() {
        const AGE = 18;
        const { checkMinOfTwo, pow } = window.functions;

        checkMinOfTwo(2, 5);

        pow(2, 5);
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
})();

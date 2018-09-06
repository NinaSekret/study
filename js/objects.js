const objects = (() => {
    const user = {};
    user.name = 'Вася';
    user.surname = 'Петров';

    user.name = 'Сергей';

    delete user.name;

    const isNumeric = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    const isEmpty = obj => {
        let count = 0;

        for (let key in obj) {
            count++;
        }

        return !count;
    };

    const sumSalaries = obj => {
        let sum = 0;

        for (let key in obj) {
            sum += obj[key];
        }

        return sum;
    };

    const getPersonWHigherSalary = obj => {
        let person = null;

        for (let key in obj) {
            if (person == null) {
                person = key;
            } else if (obj[key] > obj[person]) {
                person = key;
            }
        }

        return person || 'Нет сотрудников';
    };

    const multiplyNumeric = obj => {
        for (let key in obj) {
            if (isNumeric(obj[key])) {
                obj[key] *= 2;
            }
        }

        return obj;
    };

    return {
        isEmpty: isEmpty,
        sumSalaries: sumSalaries,
        getPersonWHigherSalary: getPersonWHigherSalary,
        multiplyNumeric: multiplyNumeric
    };
})();

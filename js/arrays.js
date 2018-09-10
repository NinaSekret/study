const arrays = (() => {

    const generateRandomNum = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

    const getRandomArrEl = arr => {
        const randomNum = generateRandomNum(0, arr.length - 1);

        return arr[randomNum];
    };

    const find = (arr, el) => {
        let result = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === el) {
                result = i;
                break;
            }
        }

        return result;
    };

    const filterRange = (arr, min, max) => {
        const filteredArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= min && arr[i] <= max) {
                filteredArr.push(arr[i]);
            }
        }

        return filteredArr;
    };

    const sumSimpleNumbers = limit => {
        const arr = [];
        let p = 2;
        let sum = 0;

        for (let i = 2; i <= limit; i++) {
            arr.push(true);
        }

        do {
            for (i = 2 * p; i <= limit; i += p) {
                arr[i] = false;
            }

            for (i = p + 1; i <= limit; i++) {
                if (arr[i]) break;
            }

            p = i;
        } while (p * p <= limit);

        for (i = 0; i < arr.length; i++) {
            if (arr[i]) {
                sum += i;
            }
        }

        return sum;
    };

    return {
        getRandomArrEl: getRandomArrEl,
        find: find,
        filterRange: filterRange,
        sumSimpleNumbers: sumSimpleNumbers
    };
})();

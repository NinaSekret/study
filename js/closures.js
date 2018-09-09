const closure = (() => {
    function sum(a) {
        return function (b) {
            return a + b;
        };
    }

    function inBetween(a, b) {
        return function (num) {
            return num >= a && num <= b;
        };
    }

    function inArray(arr) {
        return function (num) {
            return arr.indexOf(num) !== -1;
        };
    }

    function byField(field) {
        return function (a, b) {
            return a[field] > b[field] ? 1 : -1;
        };
    }

    return {
        sum: sum,
        inBetween: inBetween,
        inArray: inArray,
        byField: byField
    };
})();

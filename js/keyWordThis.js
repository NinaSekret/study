const thisWord = (() => {

    const calculator = {
        a: 0,
        b: 0,
        read: function () {
            this.a = +prompt('a value', 0);
            this.b = +prompt('b value', 0);
        },
        sum: function () {
            return this.a + this.b
        },
        mul: function () {
            this.a * this.b
        }
    };

    const ladder = {
        step: 0,
        up: function () {
            this.step++;
            return this;
        },
        down: function () {
            this.step--;
            return this;
        },
        showStep: function () {
            console.log(`Ladder: ${this.step}`);
        }
    };

    return {
        calc: calculator,
        ladder: ladder
    };
})();

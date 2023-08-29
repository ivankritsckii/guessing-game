class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
        this.res = (this.max - this.min)/2 + this.min
    }

    guess() {
        return this.res
    }

    lower() {
        this.max = this.res
        this.res = Math.ceil((this.res - this.min)/2 + this.min);
         
    }

    greater() {
        this.min = this.res
        this.res = Math.round((this.max - this.res)/2 + this.res)
    }
}

module.exports = GuessingGame;

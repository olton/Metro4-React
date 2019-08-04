Array.prototype.shuffle = function () {
    let currentIndex = this.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
};

Array.prototype.clone = function () {
    return this.slice(0);
};

Array.prototype.unique = function () {
    const a = this.concat();
    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

Array.from = function(val) {
    const a = [];

    if (val.length === undefined && typeof val === "object") {
        return Object.values(val);
    }

    if (val.length !== undefined) {
        for(let i = 0; i < val.length; i++) {
            a.push(val[i]);
        }
        return a;
    }

    throw new Error("Value can not be converted to array");
};

Array.prototype.contains = function(val, from){
    return this.indexOf(val, from) > -1;
};

exports.min = function min(array) {
    if (array === undefined || array.length < 0) {
        return 0;
    }
    let minNum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i];
        }
    }
    return minNum;
};

exports.max = function max(array) {
    if (array === undefined || array.length < 0) {
        return 0;
    }
    let maxNum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length <= 0) {
        return 0;
    } else {
        let sum = array.reduce((acc, val) => acc + val);
        return sum / array.length;
    }
};

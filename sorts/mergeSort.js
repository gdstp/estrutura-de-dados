const merge = (left, right) => {
    const arrAux = [];

    while (left.length && right.length) {
        arrAux.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    while (left.length) {
        arrAux.push(left.shift());
    }
    while (right.length) {
        arrAux.push(right.shift());
    }

    return arrAux;
};

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle, arr.length);
    const sortedLeft = mergeSort(arrLeft);
    const sortedRight = mergeSort(arrRight);
    return merge(sortedLeft, sortedRight);
};

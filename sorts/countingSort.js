const countingSort = (inputArr) => {
    var t0 = performance.now();
    const min = Math.min.apply(null, inputArr);
    const max = Math.max.apply(null, inputArr);
    var j = 0;
    count = new Array(max).fill(0);

    for (let i = 0; i < inputArr.length; i++) {
        count[inputArr[i]]++;
    }

    for (let i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            inputArr[j++] = i;
        }
    }
    var t1 = performance.now();
    var time = t1 - t0;
    return { time, arr: inputArr };
};

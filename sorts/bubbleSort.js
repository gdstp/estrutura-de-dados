const bubbleSort = (arr) => {
    var t0 = performance.now();

    const arrLen = arr.length;
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < arrLen; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    var t1 = performance.now();
    var time = t1 - t0;
    return { time, arr };
};

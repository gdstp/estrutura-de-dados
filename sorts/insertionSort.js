const insertionSort = (arr) => {
    var t0 = performance.now();

    let key, j;
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j > -1 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    var t1 = performance.now();
    var time = t1 - t0;
    return { time, arr };
};

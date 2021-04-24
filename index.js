function run() {
    // Get user input and split into array
    const inputValue = document.getElementById("input").value;
    const arr = inputValue.split(",");
    // Parse input from string to Integer
    arr.map((item, index) => (arr[index] = parseInt(item)));
    // Define which types can be used
    const types = [
        "insertion_sort",
        "bubble_sort",
        "counting_sort",
        "merge_sort",
    ];
    // Creates an array that contains which types should be executed
    const selectedType = [];
    types.map((type) => {
        const element = document.getElementsByName(type);
        element[0].checked && selectedType.push(type);
    });
    // Function to generate HTML with the result
    const parseHtml = (divName, divTime, time, arr) => {
        document.getElementById(divName).classList.remove("hidden");
        document.getElementById(divTime).innerHTML = time + " segundos";
        document.getElementById("res_div_num").innerHTML = arr;
        document.getElementById("res_div").classList.remove("hidden");
    };
    // Define auxiliar variables
    var is = {};
    var bs = {};
    var ms = {};
    var cs = {};
    var lower = [];
    // Loop throught array and execute function based on their name
    selectedType.map((type) => {
        switch (type) {
            case "insertion_sort":
                is = insertionSort(arr);
                lower.push(is.time);
                parseHtml("is_div", "is_time", is.time.toFixed(5), is.arr);
                break;
            case "bubble_sort":
                bs = bubbleSort(arr);
                lower.push(bs.time);
                parseHtml("bs_div", "bs_time", bs.time.toFixed(5), bs.arr);
                break;
            case "merge_sort":
                var t0 = performance.now();
                ms.arr = mergeSort(arr);
                var t1 = performance.now();
                var time = t1 - t0;
                ms.time = time;
                lower.push(ms.time);
                parseHtml("ms_div", "ms_time", ms.time.toFixed(5), ms.arr);
            case "counting_sort":
                cs = countingSort(arr);
                lower.push(cs.time);
                parseHtml("cs_div", "cs_time", cs.time.toFixed(5), cs.arr);
        }
    });
    // Defines min and max as initial value
    var min = lower[0];
    var max = lower[0];
    // Loop to define min and max
    lower.map((num) => {
        num < min && (min = num);
        num > max && (max = num);
    });
    // Add min and max to html
    document.getElementById("max_div").classList.remove("hidden");
    document.getElementById("max_num").innerHTML = max.toFixed(5);

    document.getElementById("min_div").classList.remove("hidden");
    document.getElementById("min_num").innerHTML = min.toFixed(5);
}

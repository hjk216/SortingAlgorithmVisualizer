var visualization_array = []

export default async function MergeSort(array) {

    merge_sort(array, 0, array.length - 1);

    return visualization_array;

}



async function merge_sort(array, start, end) {
    if(start < end) {
        var middle = Math.floor((start + end) / 2);
 
        merge_sort(array, start, middle);

        merge_sort(array, middle + 1, end);

        merge(array, start, middle, end);
    }
}



// Merge Array
async function merge(array, start, middle, end) {
    var n1 = middle - start + 1;
    var n2 = end - middle + 1;

    var left = [];
    var right = [];

    // Add Values to Temp Arrays
    for(var i = 0; i < n1; i++) {
        left.push(array[start + i]);
    }
    for(var j = 1; j < n2; j++) {
        right.push(array[middle + j]);
    }

    i = 0;
    j = 0;

    // Sort Two Arrays
    for(var k = start; k < end + 1; k++) {
        if(i > (left.length - 1)) {
            array[k] = right[j];
            j = j + 1;
            continue;
        }
        if(j > (right.length - 1)) {
            array[k] = left[i];
            i = i + 1;
            continue;
        }

        if(left[i] <= right[j]) {
            array[k] = left[i];
            i = i + 1;
        }
        else {
            array[k] = right[j];
            j = j + 1;
        }
    }

    // Add Information (Start, End, Current Array) To Visualization Array
    var visualization_info = [];
    var start_end = [start, end];
    let array_info = array.slice(0, array.length);
    visualization_info.push(start_end);
    visualization_info.push(array_info);
    visualization_array.push(visualization_info);
}



// Animate Merge Sort
export async function VisualizeMergeSort(visualization_array, speed) {
    const bars = document.getElementsByClassName('bar');

    for(var i = 0; i < visualization_array.length; i++) {
        var index = visualization_array[i][0];

        // Color Bars
        for(var j = index[0]; j <= index[1]; j++) {
            bars[j].style.backgroundColor = 'red';
            await new Promise((resolve) => setTimeout(resolve, speed));
        }

        // Merge
        for(var k = index[0]; k <= index[1]; k++) {
            bars[k].style.height = `${visualization_array[i][1][k] * 5.5}px`;
            await new Promise((resolve) => setTimeout(resolve, speed));
        }

        // Revert Color to Original
        for(var g = 0; g < bars.length; g++) {
            bars[g].style.backgroundColor = 'green';
        }
    }
}

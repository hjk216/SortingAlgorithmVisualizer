export default async function MergeSort(array, speed) {
    //const bars = document.getElementsByClassName('bar');

    //array = [6,7,8,9,1,2,3,4] // Testing
    array = [8,2,5,3,7,9,1,6,3,3]

    console.log(array); // Testing

    merge_sort(array, 0, array.length - 1);
    //var q = Math.floor((0 + array.length) / 2); // Testing
    //merge(array, 0, q, array.length - 1) // Testing
    console.log(array); // Testing

    return array;
}



function merge_sort(array, p, r) {
    if(p < r) {
        var q = Math.floor((p + r) / 2);

        merge_sort(array, p, q);
        merge_sort(array, q + 1, r);
        merge(array, p, q, r);
    }
}



function merge(array, p, q, r) {
    var n1 = q - p + 1;
    var n2 = r - q + 1;
    
    //console.log('   N1: ' + n1); // Testing
    //console.log('   N2: ' + n2); // Testing
    //console.log(' '); // Testing

    var left = [];
    var right = [];

    for(var i = 0; i < n1; i++) {
        left.push(array[p + i]);
    }
    for(var j = 1; j < n2; j++) {
        right.push(array[q + j]);
    }

    //console.log('LEFT : ' +  left); // Testing
    //console.log('RIGHT: ' + right); // Testing
    //console.log(' '); // Testing

    i = 0;
    j = 0;

    for(var k = p; k < r + 1; k++) {
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
    //console.log('ARRAY: ' + array); // Testing
}




/* 
function merge_sort(array, p, r) {
    if(p < r) {
        var q = Math.floor((p + r) / 2);

        merge_sort(array, p, q);
        merge_sort(array, q + 1, r);
        merge(array, p, q, r);
    }
}



function merge(array, p, q, r) {
    var n1 = q - p + 1;
    var n2 = r - q + 1;
    
    //console.log('   N1: ' + n1); // Testing
    //console.log('   N2: ' + n2); // Testing
    //console.log(' '); // Testing

    var left = [];
    var right = [];

    for(var i = 0; i < n1; i++) {
        left.push(array[p + i]);
    }
    for(var j = 1; j < n2; j++) {
        right.push(array[q + j]);
    }

    //console.log('LEFT : ' +  left); // Testing
    //console.log('RIGHT: ' + right); // Testing
    //console.log(' '); // Testing

    i = 0;
    j = 0;

    for(var k = p; k < r + 1; k++) {
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
    //console.log('ARRAY: ' + array); // Testing
}
*/

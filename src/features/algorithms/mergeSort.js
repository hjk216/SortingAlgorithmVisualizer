export default async function MergeSort(array, speed) {
    //const bars = document.getElementsByClassName('bar');

    array = [2,0,4,1,3,9,8,5]

    console.log(array);

    // Sort Array
    async function sortArray(array) {
        var left = array.slice(0, array.length/2);
        var right = array.slice(array.length/2, array.length);
        var sorted_array = [];

        var l = 0;
        var r = 0;
        while(true) {
            if(left[l] < right[r]) {
                sorted_array.push(left[l]);
                l = l + 1;
            } else {
                sorted_array.push(right[r]);
                r = r + 1;
            }

            if(l === left.length) {
                for(var i = r; i < right.length; i++) {
                    sorted_array.push(right[i]);
                }
                break;
            }
            if(r === right.length) {
                for(var j = l; j < left.length; j++) {
                    sorted_array.push(left[j]);
                }
                break;
            }

        }
        return sorted_array;
    }

    //function mergeSort() {
        
    //}


    var num = 0;
    var right = 0;
    var left = 4;
    while(num < array.length - 1) {
        var current_array = array.slice(right, left);
        let starting_index = right;
        console.log(current_array)
        sortArray(array).then((sorted_array) => {
            for(var n = 0; n < sorted_array.length; n++) {
                array[starting_index] = sorted_array[n];
                starting_index = starting_index + 1;
            }
            console.log(array);
        })

        num = num + 1;
        return
    }

}


// [ 2 , 0 , 4 , 1 , 3 , 9 , 8 , 5 ]

// [ 2 , 0 , 4 , 1 ]   [ 3 , 9 , 8 , 5 ]

// [ 2 , 0 ] [ 4 , 1 ]   [ 3 , 9 ] [ 8 , 5 ]

// 


// [ 0 2 4 1 ]
// [ 0 2 ]
// [ 1 4 ]
// [ 0 1 2 4 ]

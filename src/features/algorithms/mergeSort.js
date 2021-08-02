export default async function MergeSort(array, speed) {
    //const bars = document.getElementsByClassName('bar');

    array = [0,2,4,6,8,1,3,5,7,9]

    console.log(array);

    async function sortArray(array) {
        var left = array.slice(0,array.length/2);
        var right = array.slice(array.length/2, array.length);
        var sorted = [];

        var l = 0;
        var r = 0;
        while(true) {
            if(left[l] < right[r]) {
                sorted.push(left[l]);
                l = l + 1;
            } else {
                sorted.push(right[r]);
                r = r + 1;
            }

            if(l === left.length) {
                for(var i = r; i < right.length; i++) {
                    sorted.push(right[i])
                }
                break;
            }
            if(r === right.length) {
                for(var j = l; j < left.length; j++) {
                    sorted.push(left[j])
                }
                break;
            }

        }
        array = sorted;
    }
    sortArray(array);

    

    




    console.log(array);
}


// [ 0 2 4 1 ]
// [ 0 2 ]
// [ 1 4 ]
// [ 0 1 2 4]

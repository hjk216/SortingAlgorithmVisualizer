export default async function InsertionSort(array, speed) {
    const bars = document.getElementsByClassName('bar');

    for(var i = 1; i < array.length; i++) {
        var current_item = array[i];
        var j = i - 1;

        while(array[j] > current_item && j >= 0) {
            bars[j].style.backgroundColor = 'orange';
            bars[j + 1].style.backgroundColor = 'orange';

            array[j + 1] = array[j];
            j = j - 1;

            // Delay For Animation
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );

            bars[j + 2].style.height = `${array[j + 1] * 5.5}px`;
            bars[j + 1].style.backgroundColor = 'black';
            bars[j + 2].style.backgroundColor = 'black';
        }
        array[j + 1] = current_item;
        bars[i].style.backgroundColor = 'black';
        bars[j + 1].style.height = `${array[j + 1] * 5.5}px`;
    }
}

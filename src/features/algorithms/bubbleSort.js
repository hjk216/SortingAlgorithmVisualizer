export default async function BubbleSort(array, speed) {
    const bars = document.getElementsByClassName('bar');

    for(var i = 0; i < array.length; i++) {
        for(var j = 1; j < array.length - i; j++) {
            bars[j-1].style.backgroundColor = 'orange';
            bars[j].style.backgroundColor = 'orange';

            // If first element greater than second element, swap
            if(array[j-1] > array[j]) {
                bars[j-1].style.height = `${array[j] * 5.5}px`;
                bars[j].style.height = `${array[j-1] * 5.5}px`;

                var temp = array[j-1]
                array[j-1] = array[j]
                array[j] = temp
            }

            // Delay For Animation
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );

            bars[j-1].style.backgroundColor = 'black';
            bars[j].style.backgroundColor = 'black';

        }
    }

}

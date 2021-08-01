export default async function SelectionSort(array, speed) {
    const bars = document.getElementsByClassName('bar')

    // For Each Element
    for(let i = 0; i < array.length; i++) {
        let smallest = i

        bars[i].style.backgroundColor = 'red';
        // Loop Through Array
        for(let s = i + 1; s < array.length; s++) {
                
                // If not i or smallest, turn bar green
                if(i !== Number(`${s - 1}`) && smallest !== Number(`${s - 1}`)) {
                    bars[s-1].style.backgroundColor = 'green';
                }

                // If current element is smaller than smallest, set smallest equal to current element
                if(array[s] < array[smallest]) {
                    if(smallest !== i) {
                        bars[smallest].style.backgroundColor = 'green';
                    }
                    smallest = s
                    bars[smallest].style.backgroundColor = 'red';
                }
                bars[s].style.backgroundColor = 'red';

                // Delay For Animation
                await new Promise((resolve) =>
                    setTimeout(() => {
                    resolve();
                    }, speed)
                );
        }
        bars[i].style.backgroundColor = 'green';

        // Swap Array Elements
        let temp = array[i]
        array[i] = array[smallest]
        array[smallest] = temp
    
        // Animation
        bars[i].style.height = `${array[i] * 5.5}px` 
        bars[smallest].style.height = `${array[smallest] * 5.5}px` 
        bars[array.length - 1].style.backgroundColor = 'green';

    bars[array.length - 1].style.backgroundColor = 'green';
    bars[smallest].style.backgroundColor = 'green';
    }
    
    return array
}

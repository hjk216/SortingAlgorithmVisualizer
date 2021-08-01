export default async function SelectionSort(array) {
    const bars = document.getElementsByClassName('bar')

    for(let i = 0; i < array.length; i++) {
        let smallest = i

        bars[i].style.backgroundColor = 'red';
        for(let s = i + 1; s < array.length; s++) {
                
                if(i !== Number(`${s - 1}`) && smallest !== Number(`${s - 1}`)) {
                    bars[s-1].style.backgroundColor = 'green';
                }

                if(array[s] < array[smallest]) {
                    if(smallest !== i) {
                        bars[smallest].style.backgroundColor = 'green';
                    }
                    smallest = s
                    bars[smallest].style.backgroundColor = 'red';
                }
                bars[s].style.backgroundColor = 'red';

                await new Promise((resolve) =>
                    setTimeout(() => {
                    resolve();
                    }, 100)
                );
        }
        bars[i].style.backgroundColor = 'green';

        let temp = array[i]
        array[i] = array[smallest]
        array[smallest] = temp
    
        bars[i].style.height = `${array[i] * 5.5}px` 
        bars[smallest].style.height = `${array[smallest] * 5.5}px` 
        bars[array.length - 1].style.backgroundColor = 'green';

        //console.log('SWITCH: ' + smallest)

    bars[array.length - 1].style.backgroundColor = 'green';
    }
    
    return array
}

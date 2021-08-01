export default async function SelectionSort(array) {
    const bars = document.getElementsByClassName('bar')

    for(let i = 0; i < array.length; i++) {
        let smallest = i

        bars[i].style.backgroundColor = 'red';
        for(let s = i + 1; s < array.length; s++) {
                
                if(i !== Number(`${s - 1}`)) {
                    bars[s-1].style.backgroundColor = 'green';
                }

                if(array[s] < array[smallest]) {
                    bars[smallest].style.backgroundColor = 'green';
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
    

    /*
    function oneLoop(i) {
        bars[i].style.backgroundColor = 'red';
        for(let s = i + 1; s < (array.length - 1); s++) {
            
            setTimeout((smallest) => {
                console.log(s)
                if(i !== Number(`${s - 1}`)) {
                    bars[s-1].style.backgroundColor = 'green';
                }

                if(array[s] < array[smallest]) {
                    bars[smallest].style.backgroundColor = 'green';
                    smallest = s
                    bars[smallest].style.backgroundColor = 'red';
                }
                bars[s].style.backgroundColor = 'red';

                // IF AT END ----> SWITCH
                if(s === Number(`${array.length - 1}`)) {
                    bars[i].style.backgroundColor = 'green';

                    console.log('SWITCH: ' + i + ' ------')

                    let temp = array[i]
                    array[i] = array[smallest]
                    array[smallest] = temp

                    //console.log(smallest)
                
                    bars[i].style.height = `${array[i] * 5.5}px` 
                    bars[smallest].style.height = `${array[smallest] * 5.5}px` 
                    bars[array.length - 1].style.backgroundColor = 'green';
                }

            }, 150 * s)

        }
    }


    for(let i = 0; i < array.length; i++) {
        setTimeout(() => {
            setTimeout(() => {
                //let smallest = i
                oneLoop(i)

            }, 500 * i)
            bars[array.length - 1].style.backgroundColor = 'green';
        }, 500 * i)
    }
    */

    /*
    function timeout(lol) {
        setTimeout(() => {
            if(lol === Number('0')) {
                return
            }
            console.log(lol)
            lol = lol - 1
            timeout(lol);
        }, 100);
    }

    timeout(10)
    */

    /*
    for(let i = 0; i < 5; i++) {
        
        setTimeout(() => {
            setTimeout(() => {
                
                for(let j = 0; j < 5; j++) {
                    setTimeout(() => {
                        console.log(j)
                    }, 100 * j);
                }

                console.log('I: ' + i)

            }, 500 * i)

        }, 500 * i)
    }
    */

    /*
    for(let i = 0; i < array.length; i++) {
        setTimeout(() => {
            //setTimeout(() => {

                //let smallest = i

                bars[i].style.backgroundColor = 'red';
                //for(let s = i + 1; s < array.length; s++) { // INNER FOR
                let length = array.length - 1
                let smallest = i
                function findSmallest(length, array, i, smallest) {
                    setTimeout((smallest) => {
                        if(smallest === Number('0')) {
                            return
                        }

                        let s = array.length - length
                        
                        if(i !== Number(`${s - 1}`)) {
                            bars[s-1].style.backgroundColor = 'green';
                        }

                        if(array[s] < array[smallest]) {
                            bars[smallest].style.backgroundColor = 'green';
                            smallest = s
                            bars[smallest].style.backgroundColor = 'red';
                        }
                        bars[s].style.backgroundColor = 'red';

                        console.log('SECOND: ' + s)

                        if(s === Number(`${array.length - 1}`)) {
                            bars[i].style.backgroundColor = 'green';

                            console.log('SWITCH: ' + i + ' ------')

                            let temp = array[i]
                            array[i] = array[smallest]
                            array[smallest] = temp

                            console.log(smallest)
                        
                            bars[i].style.height = `${array[i] * 5.5}px` 
                            bars[smallest].style.height = `${array[smallest] * 5.5}px` 
                            bars[array.length - 1].style.backgroundColor = 'green';
                        }
                        length = length - 1
                        findSmallest(length, array, i, smallest)
                    }, 100)

                }
                findSmallest(length, array, i, smallest)
                //} //INNER FOR
                
            //}, 500 * i)

            bars[array.length - 1].style.backgroundColor = 'green';
        }, 500 * i)
        bars[array.length - 1].style.backgroundColor = 'green';
    }
    */
    


        /*
        setTimeout(() => {
            let smallest = i
            setTimeout(() => {

                let smallest = i

                bars[i].style.backgroundColor = 'red';
                for(let s = i + 1; s < array.length; s++) {

                    setTimeout((smallest) => {
                        
                        if(i !== Number(`${s - 1}`)) {
                            bars[s-1].style.backgroundColor = 'green';
                        }

                        if(array[s] < array[smallest]) {
                            bars[smallest].style.backgroundColor = 'green';
                            smallest = s
                            bars[smallest].style.backgroundColor = 'red';
                        }
                        bars[s].style.backgroundColor = 'red';

                        console.log('SECOND: ' + s)
                    }, 100 * s)

                }
                bars[i].style.backgroundColor = 'green';

                console.log('SWITCH: ' + i + ' ------')

                let temp = array[i]
                array[i] = array[smallest]
                array[smallest] = temp

                console.log(smallest)
            
                bars[i].style.height = `${array[i] * 5.5}px` 
                bars[smallest].style.height = `${array[smallest] * 5.5}px` 
                bars[array.length - 1].style.backgroundColor = 'green';
    
            }, 500 * i)

            bars[array.length - 1].style.backgroundColor = 'green';
        }, 500 * i)
    }
    */
    
    
    /*
    for(let i = 0; i < 5; i++) {
        
        setTimeout(() => {
            setTimeout(() => {
                for(let k = 0; k < 5; k++) {

                    setTimeout(() => {
                        console.log('NUM: ' + k)
                    }, 100 * k)
                    
                }

                console.log(i)

            }, 500 * i)

        }, 500 * i)
    }
    */
    
    

    // THIS IS THE KEY MAYBE
    /*
    function lol(l, i) {
        console.log('NUM: ' + l + '  ON: ' + i)
    }
    
    function iterate(i) {
        //var loopInterval = setTimeout(lol, 100);
        for(let l = 0; l < 3; l++) {
            var loopInterval = setTimeout(lol(l,i), 1000 * l);
            if(l === Number('2')) {
                clearTimeout(loopInterval)
            }
        }
    }
    

    function play() {
        //var interval = setTimeout(iterate, 100)
        for(let i = 0; i < 5; i++) {
            var interval = setTimeout(iterate(i), 1000 * i)
            //iterate(i)
            console.log(i)
            if(i === Number('4')) {
                clearTimeout(interval)
            }
        }
    }

    play()
    */
    
    

    /*
    function findSmallest(i, smallest, array) {
        console.log(array)
        for(let s = i + 1; s < array.length; s++) {
            console.log('LOL')

            bars[s-1].style.backgroundColor = 'green';
            bars[s].style.backgroundColor = 'red';
            
            if(array[s] < array[smallest]) {
                bars[smallest].style.backgroundColor = 'green';
                smallest = s;
                bars[smallest].style.backgroundColor = 'red';
            }
        }
    }

    function sort(array) {
        var interval = setInterval(findSmallest, 10000);
        for(let i = 0; i < 5; i++) {
            console.log('LOOP START')
            let smallest = i;

            bars[i].style.backgroundColor = 'red';

            findSmallest(i, smallest, array);
            if(i === Number(`${array.length - 1}`)) {
                clearInterval(interval);
            }

            bars[i].style.backgroundColor = 'green';
            bars[array.length - 1].style.backgroundColor = 'green';

            let temp = array[i]
            array[i] = array[smallest]
            array[smallest] = temp
        
            bars[i].style.height = `${array[i] * 5.5}px` 
            bars[smallest].style.height = `${array[smallest] * 5.5}px` 
            bars[array.length - 1].style.backgroundColor = 'green';
        }
    }

    sort(array)
    */

    /*
    for(let i = 0; i < array.length; i++) {

        setTimeout(() => {
    
            let smallest = i



            bars[i].style.backgroundColor = 'red';
            for(let s = i + 1; s < array.length; s++) {



                bars[s-1].style.backgroundColor = 'green';
                
                if(array[s] < array[smallest]) {
                    bars[smallest].style.backgroundColor = 'green';
                    smallest = s
                    bars[smallest].style.backgroundColor = 'red';
                }
                
                bars[s].style.backgroundColor = 'red';


        
            }
            bars[i].style.backgroundColor = 'green';



            let temp = array[i]
            array[i] = array[smallest]
            array[smallest] = temp
        
            bars[i].style.height = `${array[i] * 5.5}px` 
            bars[smallest].style.height = `${array[smallest] * 5.5}px` 
            bars[array.length - 1].style.backgroundColor = 'green';
    
        }, 100 * i)
    
    }
    */

    //console.log(array)


    // Works Almost
    /*

    for(let i = 0; i < array.length; i++) {

        setTimeout(() => {
    
            let smallest = i



            bars[i].style.backgroundColor = 'red';
            for(let s = i + 1; s < array.length; s++) {



                bars[s-1].style.backgroundColor = 'green';
                
                if(array[s] < array[smallest]) {
                    bars[smallest].style.backgroundColor = 'green';
                    smallest = s
                    bars[smallest].style.backgroundColor = 'red';
                }
                
                bars[s].style.backgroundColor = 'red';


        
            }
            bars[i].style.backgroundColor = 'green';



            let temp = array[i]
            array[i] = array[smallest]
            array[smallest] = temp
        
            bars[i].style.height = `${array[i] * 5.5}px` 
            bars[smallest].style.height = `${array[smallest] * 5.5}px` 
            bars[array.length - 1].style.backgroundColor = 'green';
    
        }, 100 * i)
    
    }

    */






    
    /*
    for(let i = 0; i < array.length; i++) {
        setTimeout(() => {
            let smallest = i
            for(let s = i + 1; s <array.length; s++) {
                setTimeout(() => {
                    bars[s-1].style.backgroundColor = 'green';
                    bars[s].style.backgroundColor = 'red';

                    let small = smallest
                    if(array[i] < array[small]) {
                        bars[small].style.backgroundColor = 'green';
                        small = s
                        bars[small].style.backgroundColor = 'red';
                    }
                    bars[array.length - 1].style.backgroundColor = 'green';
                    
                }, 30 * s)
            }
            bars[i].style.height = array[i] * 5.5
            bars[smallest].style.height = array[smallest] * 5.5

            

        }, 10 * i)
    }
    */

    /*
    for(let i = 0; i < 10; i++) {

        setTimeout(() => {
            for(let j = 0; j < 10; j++) {
                setTimeout(() => {
                    console.log(j)
                })
            }
        }, 10 * i)
    }
    */
    
    return array
}



// Does Work In A Way
/*

for(let i = 0; i < array.length; i++) {

    setTimeout(() => {

    var smallest = i
    for(let s = i + 1; s < array.length; s++) {

        if(array[s] < array[smallest]) {
            smallest = s
        }

        bars[s-1].style.backgroundColor = 'green';
        bars[s].style.backgroundColor = 'red';

    }
    var temp = array[i]
    array[i] = array[smallest]
    array[smallest] = temp

    bars[i].style.height = `${array[i] * 5.5}px` 
    bars[smallest].style.height = `${array[smallest] * 5.5}px` 
    bars[array.length - 1].style.backgroundColor = 'green';

    }, 100 * i)

}

*/





// Visual Algorithm
/* 

for(let i = 0; i < array.length; i++) {
    let smallest = i
    for(let s = i + 1; s < array.length; s++) {
        if(array[s] < array[smallest]) {
            smallest = s
        }
    }
    var temp = array[i]
    array[i] = array[smallest]
    array[smallest] = temp

    bars[i].style.height = `${array[i] * 5.5}px` 
    bars[smallest].style.height = `${array[smallest] * 5.5}px` 

}

*/



// Selection Sort Algorithm
/* 

for(let i = 0; i < array.length; i++) {
    let smallest = i
    for(let s = i + 1; s < array.length; s++) {
        if(array[s] < array[smallest]) {
            smallest = s
        }
    }
    var temp = array[i]
    array[i] = array[smallest]
    array[smallest] = temp
}

*/

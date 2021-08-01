import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import SelectionSort from '../algorithms/selectionSort'

import './Display.css'
import './Header.css'

const ARRAY_LENGTH = 30



export default class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }



    componentDidMount() {
        this.randomizeArray();
    }



    randomizeArray() {
        var array = []

        while(array.length < ARRAY_LENGTH) {
            var randomIndex = Math.floor(Math.random() * (ARRAY_LENGTH + 2))

            if(!(array.includes(randomIndex)) && randomIndex > 1) {
                array.push(randomIndex)
            }
        }
        this.setState({array})

    }

    visualizeArray() {
        var array = this.state.array
        SelectionSort(array)
        //this.setState(SelectionSort(array))

        //This Works
        /*
        for(let k = 0; k < 10; k++) {
            setTimeout(() => {
                console.log(k);
            }, 1000 * k)
        }
        */
    }



    render() {
        const {array} = this.state;

        return (
            <div>
                <div id='header'>
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/" id='header_title'>Sorting Algorithm Visualizer</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link className='nav_link' onClick={() => this.visualizeArray()}>Selection Sort</Nav.Link>
                            <Nav.Link className='nav_link'>Bubble Sort</Nav.Link>
                            <Nav.Link className='nav_link'>Merge Sort</Nav.Link>
                            <Nav.Link className='nav_link' id='random_button' onClick={() => this.randomizeArray()}>Randomize Array</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <div id='display_box'>
                    {array.map((bar, id) => (
                        <div className='bar' key={id} style={{height:`${bar * 5.5}px`, margin:`${id * 9.85}px`}}>
                            
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

// <div className='bar' key={id} style={{height:`${this.state.height[id]}px`, margin:`${this.state.margin[id]}px`}}>

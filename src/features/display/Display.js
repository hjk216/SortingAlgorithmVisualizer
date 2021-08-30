import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import BubbleSort from '../algorithms/bubbleSort';
import InsertionSort from '../algorithms/insertionSort';
import MergeSort, { VisualizeMergeSort } from '../algorithms/mergeSort';
import SelectionSort from '../algorithms/selectionSort';

import './Display.css';
import './Header.css';



const ARRAY_LENGTH = 100;

const SPEED = 100;



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



    // Disables buttons while algorithm is running, enables after
    disableButtons(action) {
        var buttons = document.getElementsByClassName('nav_link');
        if(action === 'disable') {
            for(var b = 0; b < buttons.length; b++) {
                buttons[b].style.opacity = 0.5;
                buttons[b].disabled = 'true';
            }
        }
        else {
            for(var c = 0; c < buttons.length; c++) {
                buttons[c].style.opacity = 1;
                buttons[c].disabled = false;
            }
        }
    }



    randomizeArray() {
        var array = [];

        while(array.length < ARRAY_LENGTH) {
            var randomIndex = Math.floor(Math.random() * (ARRAY_LENGTH + 2))

            if(!(array.includes(randomIndex)) && randomIndex > 1) {
                array.push(randomIndex);
            }
        }
        this.setState({array});

    }



    bubbleSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        BubbleSort(array, SPEED)
        .then(() => {
            this.disableButtons('enable');
        });
    }



    insertionSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        InsertionSort(array, SPEED)
        .then(() => {
            this.disableButtons('enable');
        });
    }



    mergeSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        // Runs the merge sort algorithm and stores data at each iteration in an array.
        // Then VisualizeMergeSort animates the array for the user.
        MergeSort(array).then((visualization_array) => {
            VisualizeMergeSort(visualization_array, SPEED).then(() => {
                this.disableButtons('enable');
            })
        })
    }



    selectionSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        SelectionSort(array, SPEED)
        .then(() => {
            this.disableButtons('enable');
        });
    }



    render() {
        const {array} = this.state;

        return (
            <div>
                <div id='header'>
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/" id='header_title'>Sorting Algorithm Visualizer</Navbar.Brand>
                        <Nav className="mr-auto">
                            <button className='nav_link' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                            <button className='nav_link' onClick={() => this.insertionSort()}>Insertion Sort</button>
                            <button className='nav_link' onClick={() => this.mergeSort()}>Merge Sort</button>
                            <button className='nav_link' onClick={() => this.selectionSort()}>Selection Sort</button>
                            <button className='nav_link' onClick={() => this.randomizeArray()}>Randomize Array</button>
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

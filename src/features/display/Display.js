import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

import BubbleSort from '../algorithms/bubbleSort';
import InsertionSort from '../algorithms/insertionSort';
import MergeSort, { VisualizeMergeSort } from '../algorithms/mergeSort';
import SelectionSort from '../algorithms/selectionSort';

import './Display.css';
import './Header.css';



//const ARRAY_LENGTH = 100;

//const SPEED = 100;



export default class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            array_length: 100,
            speed: 50,
            speed_name: 'Medium',
        };

        this.onSpeedChange = this.onSpeedChange.bind(this);
        this.onBarChange = this.onBarChange.bind(this);
    }



    componentDidMount() {
        this.randomizeArray();
    }



    onSpeedChange(event) {
        var speed = parseInt(event);
        this.setState({speed});

        var speed_name = 'Medium';
        if(speed === 5) {speed_name = 'Fast';}
        else if(speed === 10) {speed_name = 'Faster';}
        else if(speed === 50) {speed_name = 'Medium';}
        else if(speed === 100) {speed_name = 'Slower';}
        else {speed_name = 'Slow';}

        this.setState({speed_name});
    }



    onBarChange(event) {
        var array_length = parseInt(event);

        if(array_length <= this.state.array_length) {
            this.setState({array_length}, () => {
                this.randomizeArray();
            });
        }
        else {
            this.setState({array_length}, () => {
                this.randomizeArray();
            });
        }
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

        while(array.length < this.state.array_length) {
            var randomIndex = Math.floor(Math.random() * (this.state.array_length + 2))

            if(!(array.includes(randomIndex)) && randomIndex > 1) {
                array.push(randomIndex);
            }
        }
        this.setState({array});
    }



    bubbleSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        BubbleSort(array, this.state.speed)
        .then(() => {
            this.disableButtons('enable');
        });
    }



    insertionSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        InsertionSort(array, this.state.speed)
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
            VisualizeMergeSort(visualization_array, this.state.speed).then(() => {
                this.disableButtons('enable');
            })
        })
    }



    selectionSort() {
        this.disableButtons('disable');

        var array = this.state.array;

        SelectionSort(array, this.state.speed)
        .then(() => {
            this.disableButtons('enable');
        });
    }



    render() {
        const {array} = this.state;

        return (
            <div>
                <div id='header'>
                    <Navbar>
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

                <div id='controls_box'>
 
                    <div className='control'>
                        <Dropdown onSelect={this.onSpeedChange}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Speed: {this.state.speed_name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey='5'>Fast</Dropdown.Item>
                                <Dropdown.Item eventKey='10'>Faster</Dropdown.Item>
                                <Dropdown.Item eventKey='50'>Medium</Dropdown.Item>
                                <Dropdown.Item eventKey='100'>Slower</Dropdown.Item>
                                <Dropdown.Item eventKey='200'>Slow</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className='control'>
                        <Dropdown onSelect={this.onBarChange}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Number of Bars: {this.state.array_length}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey='100'>100</Dropdown.Item>
                                <Dropdown.Item eventKey='80'>80</Dropdown.Item>
                                <Dropdown.Item eventKey='60'>60</Dropdown.Item>
                                <Dropdown.Item eventKey='40'>40</Dropdown.Item>
                                <Dropdown.Item eventKey='20'>20</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

            </div>
        )
    }
}

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import SelectionSort from '../algorithms/selectionSort'

import './Display.css'
import './Header.css'



const ARRAY_LENGTH = 10;

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
        this.disableButtons('disable');

        var array = this.state.array
        
        SelectionSort(array, SPEED)
        .then(() => {
            this.disableButtons('enable')
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
                            <button className='nav_link' onClick={() => this.visualizeArray()}>Selection Sort</button>
                            <button className='nav_link'>Bubble Sort</button>
                            <button className='nav_link'>Merge Sort</button>
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

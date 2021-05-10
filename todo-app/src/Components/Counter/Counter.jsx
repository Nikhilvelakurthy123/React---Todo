import React, { Component } from 'react';
import './Counter.css'
import Counter1 from './CounterMyType'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Counter extends Component {
    //define initial state in a constructor
    // satet=> counter 0

    constructor() {
        super(); // error 1
        this.state = {
            counter: 0,
            isDisabled: false
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.undo = this.undo.bind(this);
        this.reset = this.reset.bind(this);
    } 

    render() {
        return (
            <div className="Counter">
                <legend>
                    <h1>Row Counter</h1>
                    <a href={'./CounterMyType.jsx'}>MyType</a><br />
                    <a href={'http://google.com'}>Google</a>
                    <Router path="todo-app\src\Components\Counter\CounterMyType.jsx" component={Counter1} />
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr><td><CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} /></td></tr>
                            <tr><td><CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement} /></td></tr>
                            <tr><td><CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} /></td></tr>
                            <tr><td><CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} /></td></tr>
                            <tr><td colSpan="2"><span className="counter">{this.state.counter} </span></td></tr>
                            <tr><td colSpan="2"><button className="undo" disabled={this.state.isDisabled} id="undo" onClick={this.undo}>Undo</button></td></tr>
                            <tr><td colSpan="2"><button className="reset" onClick={this.reset} >Reset</button></td></tr>
                        </tbody>
                    </table>
                </legend>
            </div>
        );
    }

    undoValue = []

    increment(by) {
        //console.log(`increment from parent - ${by}`);
        this.setState(
            {
                isDisabled: false
            }
        );
        this.undoValue.push(by)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by) {
        //console.log(`increment from parent - ${by}`);
        this.setState(
            {
                isDisabled: false
            }
        );
        this.undoValue.push(by)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }

    undo() {
        if (this.undoValue.length == 0) {
            //this.props.onButtonClick(this.state.value);
            //this.setState({ value: '' });
        }
        else {
            console.log(this.undoValue)
            console.log(this.undoValue.length)
            this.setState(
                {
                    counter: this.state.counter - this.undoValue.pop()
                }
            );
            console.log(this.undoValue)
            console.log(this.undoValue.length)
        }
    }

    reset() {
        this.undoValue = []
        this.setState(
            {
                counter: 0,
                isDisabled: true
            }
        );
    }
}

export class CounterButton extends Component {

    //define initial state in a constructor
    // satet=> counter 0

    constructor() {
        super(); // error 1
        this.state = {
            counter: 0
        }
        //this.increment = this.increment.bind(this);
        //this.decrement = super.decrement.bind(this);
        //Counter.decrement = 
    }

    render() {
        return (
            <div >
                <button onClick={() => this.props.incrementMethod(this.props.by)} > {this.props.by} </button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} > {this.props.by} </button>
            </div>
        )
    }

    // increment() { //update state - counter++
    //     //console.log('increment');
    //     //this.state.counter++;
    //     this.setState(
    //         {
    //             counter: this.state.counter + this.props.by
    //         }
    //     );

    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement() { //update state - counter++
    //     //console.log('increment');
    //     //this.state.counter++;
    //     this.setState(
    //         {
    //             counter: this.state.counter - this.props.by
    //         }
    //     );

    //     this.props.decrementMethod(this.props.by);
    // }
}
CounterButton.defaultProps = {
    by: 100
}

/*Counter.prototype = {
    by : PropTypes.Number
}*/
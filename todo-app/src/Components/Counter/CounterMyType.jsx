import React,{Component} from 'react';
import './Counter.css'

console.log("end")

export default class Counter1 extends Component{
    
    //define initial state in a constructor
    // satet=> counter 0

    constructor(){
        super(); // error 1
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.increment5 = this.increment5.bind(this);
        this.decrement5 = this.decrement5.bind(this);
        this.reset = this.reset.bind(this);
    }

    render(){
    return (
        <div className="Counter">
        <legend><h1>Row Counter</h1>
        <table >    
        <tr><td><button onClick={this.increment}>+1</button></td>
        <td><button onClick={this.decrement}>-1</button></td></tr>
        <tr><td><button onClick={this.increment5}>+5</button></td>
        <td><button onClick={this.decrement5}>-5</button></td></tr>
        <tr className="center"><td colSpan="2"><span className="counter">{this.state.counter}</span></td></tr>
        <tr className="center"><td colSpan="2"><button type="Reset">Reset</button></td></tr>
        </table>
        </legend>
        </div>
    )
    }

    increment(){ //update state - counter++
    //console.log('increment');
    //this.state.counter++;
    this.setState(
            {
                counter:this.state.counter+1
            }
        );
    }

    decrement(){ //update state - counter++
        //console.log('increment');
        //this.state.counter++;
        this.setState(
                {
                    counter:this.state.counter-1
                }
            );
        }

    increment5(){ //update state - counter++
    //console.log('increment');
    //this.state.counter++;
    this.setState(
            {
                counter:this.state.counter+5
            }
        );
    }    

    decrement5(){ //update state - counter++
        //console.log('increment');
        //this.state.counter++;
        this.setState(
                {
                    counter:this.state.counter-5
                }
            );
        }
        
    reset(){
        this.setState({
            counter:0
        })
        
    }
}
import React, { Component } from 'react';
import './App.css';
// import FirstComponent, { ThirdComponent } from './Components/learning-examples/FirstComponent'
// import { SecondComponent, Fourth } from './Components/learning-examples/SecondComponent'
// import Counter from './Components/Counter/Counter';
// import Counter1 from './Components/Counter/CounterMyType'
// import CounterMyType from './Components/Counter/CounterMyType1'
import {TodoApp} from './Components/todoManagement/TodoApp'
import './Components/todoManagement/CSS/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CounterMyType />,<Counter/> */}
        <TodoApp />
      </div>
    );
  }
}
export default App;




















  //call two render methods
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showComponent: false,
  //   };
  //   this._onButtonClick = this._onButtonClick.bind(this);
  // }

  // _onButtonClick() {
  //   this.setState({
  //     showComponent: true,
  //     my:true
  //   });
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <div><CounterMyType /></div>
  //       <button onClick={this._onButtonClick}>sir's</button>
  //       { this.state.showComponent ? <Counter /> : null }
  //     </div>
  //   );
  // }


  // render() {
  //   return (
  //     <div className="Counter1">

  //     </div>
  //   );
  // }

// export class sir extends Component{

//   render() {
//     return (
//       <div className="App">
//         <Counter />
//       </div>
//     );
//   }
// }
















// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="App">
//         Hello
//         <FirstComponent></FirstComponent>
//         <SecondComponent />
//         <ThirdComponent />
//         <Fourth />
//       </div>
//     );
//   }
// }

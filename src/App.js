import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

// Alternatives to the package react-transition-group:
// a. react motion :: uses phisics tho best animate values of keyframes you provide
// b. react move :: has to components: Animate and NodeGroup you always work with objects describing the state of animation
// With react move you can controll moch more params than in react-transition-group
// c. react router transition :: for easy creating route transitions, it's build on react motion, gives AnimatedSwitch component that
// repalaces router <Switch> component for router v4 or higher

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br></br>
        <Transition
          in={this.state.showBlock} 
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          >
            {state => (
              <div style={{
                          backgroundColor: 'red',
                          width: 100,
                          height: 100,
                          margin: 'auto',
                          transition: 'opacity 1s ease-out',
                          opacity: state === 'exited' ? 0 : 
                          state === 'entered' ? 1 : 0
                        }}></div>
            )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

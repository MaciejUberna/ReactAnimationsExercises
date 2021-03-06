import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3],
        totalCtr: 3
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: [prevState.totalCtr + 1].concat(prevState.items),
                totalCtr: prevState.totalCtr + 1
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter( (item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CSSTransition key={index} classNames="fade" timeout={800}>
                <li
                    className="ListItem" 
                    onClick={() => this.removeItemHandler(index)}
                >
                    {item}
                </li>
            </CSSTransition>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                {/* TransitionGroup works anly with Transition or CSSTransition. */}
                <TransitionGroup 
                    className="List"
                    component="ul">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;
import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 3000
}

const modal = (props) => {
    return (        
        <CSSTransition 
            in={props.show} 
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                // this below is used when animation is played for the first time
                appear: '',
                appearActive: ''
            }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );
};

export default modal;
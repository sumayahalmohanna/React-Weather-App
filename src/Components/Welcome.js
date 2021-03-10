import React from 'react';
import '../Styles/styles.css';

function Welcome(props) {
    return (
       <div className={props.className}>
            <div className="greeting-box">
            <h1 className="greeting">Howdy!</h1>
            <h2 className="medium-heading">Welcome to the ad free weather app!</h2>
            <h4 className="small-heading">May good weather always find you.</h4>
        </div>
       </div>
    )}
export default Welcome;
import React, { Component } from 'react';
import './coHostPanel.css';

/*
    How to add a Co-Host:
        - Add Co-Host website url to href on line 15
        - Import logo and insert it into src on line 17
        - Add co-host description to the p on line 20
        - Copy line 17 - 23 to create a second co-host if needed
*/

class CoHostPanel extends Component {
    render() {
        return (
            <div className="coHostContainer">
                <h1>Co-Hosted By</h1>
                <div className="coHostInfo"> 
                    <a className="coHostLogo" href="" target="_blank" rel="noreferrer noopener">
                        <img alt="Logo" src={}/>
                    </a>
                    <p className="coHostDescription">
                    </p>
                </div>
            </div>
        );
    }
}

export default CoHostPanel;
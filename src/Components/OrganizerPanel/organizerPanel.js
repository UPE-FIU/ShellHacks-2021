import React, { Component } from 'react';
import './organizerPanel.css';
import UPE from '../../SVG/UPE_Logo.svg';

class OrganizerPanel extends Component {
    render() {
        return (
            <div className="organizerContainer">
                <h2 className="organizerTitle">Organized By</h2>
                <div className="organizerInfo"> 
                    <a className="organizerLogo" href="https://upe.cs.fiu.edu/" target="_blank" rel="noreferrer noopener">
                        <img alt="UPE Logo" src={UPE}/>
                    </a>
                    <p className="organizerText">
                        Upsilon Pi Epsilon (UPE) is the largest student organization for technology at Florida International University (FIU). Our mission is to provide students with opportunities to develop technically and professionally. We welcome students of all academic backgrounds and skill levels who are interested in technology.
                    </p>
                </div>
            </div>
        );
    }
}

export default OrganizerPanel;
import React, { Component } from 'react';
import './infoPanel.css'
import ShellHacksLogo from '../../SVG/Wordmark_2021.svg'
import Sponsors from '../../SVG/Other Logos.svg'

class infoPanel extends Component {
    render() {
        return (
            <div className="infoContainer">
                <div className="shellLogo">
                    <img src={ShellHacksLogo} alt='ShellHacks Logo'  />
                </div>
                <h1>Florida's Largest Hackathon</h1>
                <h2>September 24th - 26th, 2021</h2>
                <h2>Hosted at FIU & Virtually</h2>
                <div className="buttonsDiv">
                    <button className="registerButton">Register Now!</button>
                    <div className="buttonRow">
                        <button className="rowButton">Join Discord</button>
                        <button className="rowButton">Sponsor Us</button>
                    </div>
                </div>
                
                
                <img src={Sponsors} alt='Other Logos' />
            </div>
        )
    }
}

export default infoPanel;
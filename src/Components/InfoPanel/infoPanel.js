import React, { Component } from 'react';
import './infoPanel.css'
import ShellHacksLogo from '../../SVG/Wordmark_2.svg'
import Sponsors from '../../SVG/Other Logos.svg'

class infoPanel extends Component {
    render() {
        return (
            <div className="infoContainer">
                <div className="shellLogo">
                    <img src={ShellHacksLogo} alt='ShellHacks Logo'  />
                </div>
                {/* <h1>Florida's Largest Hackathon</h1> */}
                <h2 className="subheading">September 24th - 26th, 2021</h2>
                <h2 className="subheading">Hosted Virtually</h2>
                <div className="buttonsDiv">
                    <a href="https://airtable.com/shrw0Nxg4xHaIGjSC" className="registerButton">Apply Now!</a>
                    <div className="buttonRow">
                        <a href="https://discord.gg/upefiu" className="rowButton">Join Discord</a>
                        <a href="mailto:Upe@fiu.edu?subject=We want to sponsor" className="rowButton">Sponsor Us</a>
                    </div>
                </div>
                <img src={Sponsors} alt='Other Logos' />
            </div>
        )
    }
}

export default infoPanel;
import React, { Component } from "react";
import "./infoPanel.css";
import ShellHacksLogo from "../../SVG/SH_Logo_Pink_Slogan.svg";

class infoPanel extends Component {
    render() {
        return (
            <div className="infoContainer">
                <div className="shellLogo">
                    <img src={ShellHacksLogo} alt="ShellHacks Logo" />
                </div>
                {/* <h1>Florida's Largest Hackathon</h1> */}
                <h2 className="subheading">September 24th - 26th, 2021</h2>
                <h2 className="subheading">Virtual • FIU, Miami FL</h2>
                <div className="buttonsDiv">
                    <a href="https://shellhacks.net" className="registerButton">
                        Register Now!
                    </a>
                    <div className="buttonRow">
                        <a
                            href="https://discord.gg/upefiu"
                            className="rowButton"
                        >
                            Join Discord
                        </a>
                        <a
                            href="mailto:Upe@fiu.edu?subject=We want to sponsor"
                            className="rowButton"
                        >
                            Sponsor Us
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default infoPanel;

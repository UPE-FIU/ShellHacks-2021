import React, { Component } from 'react';
import './footerPanel.css';
import Swimmer from '../../SVG/Swimmer.svg';
import Discord from '../../SVG/Socials/discord.svg';
import Instagram from '../../SVG/Socials/instagram.svg';
import Facebook from '../../SVG/Socials/facebook.svg';
import Twitter from '../../SVG/Socials/twitter.svg';
import LinkedIn from '../../SVG/Socials/linkedin.svg';
import OceanFloor from '../../SVG/Ocean_Floor.svg';

class FooterPanel extends Component {
    render() {
        return (
            <div className="footerContainer">
                <img className="footerSwimmer" src={Swimmer} alt="Swimmer" />
                <div className="footerSocials">
                    <a className="footerLogo" href="https://discordapp.com/invite/upefiu" target="_blank" rel="noreferrer noopener">
                        <img alt="Discord" className="footerLogoImg" src={Discord} />
                    </a>
                    <a className="footerLogo" href="https://www.instagram.com/upefiu" target="_blank" rel="noreferrer noopener">
                        <img alt="Instagram" className="footerLogoImg" src={Instagram} />
                    </a>
                    <a className="footerLogo" href="https://www.facebook.com/upefiu" target="_blank" rel="noreferrer noopener">
                        <img alt="Facebook" className="footerLogoImg" src={Facebook} />
                    </a>
                    <a className="footerLogo" href="https://twitter.com/upefiu" target="_blank" rel="noreferrer noopener">
                        <img alt="Twitter" className="footerLogoImg" src={Twitter} />
                    </a>
                    <a className="footerLogo" href="https://www.linkedin.com/company/upe-fiu" target="_blank" rel="noreferrer noopener">
                        <img alt="LinkedIn" className="footerLogoImg" src={LinkedIn} />
                    </a>
                </div>
                <h2 className="footerMessage">With 🤍 from ShellHacks</h2>
                <a className="footerMLHLink" href="http://mlh.io/code-of-conduct" target="_blank" rel="noreferrer noopoener">
                    <p className="footerMLHText">MLH Code of Conduct</p>
                </a>
                <img className="footerOceanFloor" src={OceanFloor} alt="Ocean Floor" />
            </div>
        )
    }
}

export default FooterPanel;
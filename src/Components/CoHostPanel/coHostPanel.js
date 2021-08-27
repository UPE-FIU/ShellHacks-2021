import React, { Component } from 'react';
import './coHostPanel.css';
import OKCoin from '../../SVG/Sponsors/OKCoin.svg';

class CoHostPanel extends Component {
    render() {
        return (
            <div className="coHostContainer">
                <h2 className="coHostTitle">Co-Hosted By</h2>
                <div className="coHostInfo"> 
                    <a className="coHostLogo" href="https://www.okcoin.com/us" target="_blank" rel="noreferrer noopener">
                        <img alt="OKCoin" src={OKCoin}/>
                    </a>
                    <p className="coHostText">
                        Okcoin is on a mission to make crypto investing and trading easily accessible to anyone around the world. We are building the next generation of tools to help onboard the investors and traders who have been on the fence about crypto. Okcoin is a globally licensed exchange with offices in San Francisco, Miami, Malta, Hong Kong, Singapore and Japan. Solve hard problems. Build extraordinary experiences. Pave the way for innovation. Join us on our mission to make cryptocurrencies accessible to the world.
                    </p>
                </div>
            </div>
        );
    }
}

export default CoHostPanel;
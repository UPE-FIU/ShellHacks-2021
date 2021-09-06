import React, { Component } from 'react';
import './MLHBadge.css';

class MLHBadge extends Component {
    render() {
        return (
            <a className="mlhBadge" href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white" target="_blank">
                <img className="mlhImg" src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" alt="Major League Hacking 2022 Hackathon Season" />
            </a>
        );   
    }
}

export default MLHBadge;
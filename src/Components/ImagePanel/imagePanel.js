import React, { Component } from 'react';
import './imagePanel.css';
import FullSkyline from '../../SVG/Full_Skyline_No_Clouds.png';

class imagePanel extends Component {
    render() {
        return (
            <div className="imageContainer">
                <img className="fullSkyline" src={FullSkyline} alt='Full Skyline' />
            </div>
        )
    }
}

export default imagePanel;
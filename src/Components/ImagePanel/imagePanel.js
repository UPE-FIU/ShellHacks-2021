import React, { Component } from 'react';
import './imagePanel.css'
import FullSkyline from '../../SVG/Full_Skyline_No_Clouds.svg'

class imagePanel extends Component {
    render() {
        return (
            <div className="imageContainer">
                <img src={FullSkyline} alt='Full Skyline' id='fullSky'/>
            </div>
        )
    }
}
export default imagePanel;
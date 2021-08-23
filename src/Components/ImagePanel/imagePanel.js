import React, { Component } from 'react';
import HalfSkyline from '../../SVG/Half_Skyline_1.svg'
import './imagePanel.css'
import FullSkyline from '../../SVG/Full_Skyline.svg'

class imagePanel extends Component {
    render() {
        return (
            <div className="imageContainer">
                <img src={FullSkyline} alt='Half Skyline' id='halfSky'/>
            </div>
        )
    }
}
export default imagePanel;
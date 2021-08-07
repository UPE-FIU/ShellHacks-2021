import React, { Component } from 'react';
import HalfSkyline from '../../SVG/Half_Skyline_1.svg'
import './imagePanel.css'

class imagePanel extends Component {
    render() {
        return (
            <div className="imageContainer">
                <img src={HalfSkyline} alt='Half Skyline' id='halfSky'/>
            </div>
        )
    }
}
export default imagePanel;
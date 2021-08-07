import React, { Component } from 'react';
import MobileSkyline from '../../SVG/SH_Mobile.svg'
import './mobileImagePanel.css'

class mobileImagePanel extends Component {
    render() {
        return (
            <div className="mobileImageContainer">
                <img src={MobileSkyline} alt='Mobile skyline'/>
            </div>
        )
    }
}
export default mobileImagePanel;
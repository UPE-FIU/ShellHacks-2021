import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './trackPanel.css';
import WebTrack from '../../SVG/Tracks/Web_Track.svg';
import MobileTrack from '../../SVG/Tracks/Mobile_Track.svg';
import AITrack from '../../SVG/Tracks/AI_Track.svg';
import GameTrack from '../../SVG/Tracks/Game_Track.svg';
import ITTrack from '../../SVG/Tracks/IT_Track.svg';
import HardwareTrack from '../../SVG/Tracks/Hardware_Track.svg';
import DesignTrack from '../../SVG/Tracks/Design_Track.svg';

function TrackItem(props) {

    return (
        <div className="track">
            <img className="trackIcon" alt={props.title} src={props.icon} />
            <h3 className="trackItemTitle">{props.title}</h3>            
        </div>
    );
}
TrackItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}



class TrackPanel extends Component {
    render() {
        return (
            <div className="trackContainer">
                <h2 className="trackTitle">Learning Tracks</h2>
                <div className="trackItemContainer"> 
                    <TrackItem icon={WebTrack} title="Web Development" />
                    <TrackItem icon={MobileTrack} title="Mobile Development" />
                    <TrackItem icon={AITrack} title="Artificial Intelligence" />
                    <TrackItem icon={GameTrack} title="Game Development" />
                    <TrackItem icon={ITTrack} title="IT & Cybersecurity" />
                    <TrackItem icon={HardwareTrack} title="Hardware" />
                    <TrackItem icon={DesignTrack} title="Product Design & Mgnt" />
                </div>
            </div>
        );
    }
}

export default TrackPanel;
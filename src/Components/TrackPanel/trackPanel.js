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
import Whale from '../../SVG/Whale.svg';

function TrackItem(props) {

    return (
        <div className="track">
            <img className="trackIcon" alt={props.title} src={props.icon} />
            <h3 className="trackItemTitle">{props.title}</h3>
            <p className="trackItemBody">{props.body}</p>            
        </div>
    );
}
TrackItem.propTypes = {
    body: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}



class TrackPanel extends Component {
    render() {
        return (
            <div className="trackContainer">
                <h2 className="trackTitle">Learning Tracks</h2>
                <div className="trackItemContainer"> 
                    <TrackItem icon={WebTrack} title="Web Development" body="Build web applications using the latest frameworks and tools" />
                    <TrackItem icon={MobileTrack} title="Mobile Development" body="Develop interactive mobile applications for iOS and Android" />
                    <TrackItem icon={AITrack} title="Artificial Intelligence" body="Implement machine learning concepts to solve tasks" />
                    <TrackItem icon={GameTrack} title="Game Development" body="Create virtual experiences to bring worlds to life" />
                    <TrackItem icon={ITTrack} title="IT & Cybersecurity" body="Dive into the world of cybersecurity, ethical hacking and more" />
                    <TrackItem icon={HardwareTrack} title="Hardware" body="Get down to the root of computers to solve real-world problems" />
                    <TrackItem icon={DesignTrack} title="Design & Project Management" body="Design user-friendly interfaces for products" />
                </div>
                <img className="trackImage" alt="Whale" src={Whale} />
            </div>
        );
    }
}

export default TrackPanel;
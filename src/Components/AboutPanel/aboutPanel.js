import React, { Component } from 'react';
import './aboutPanel.css';
import Mantarays from '../../SVG/Mantarays.svg';

class AboutPanel extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutContent"> 
                    <h2 className="aboutTitle">Ride The Wave</h2>
                    <p className="aboutText">
                        Ready to kickstart your career in tech? Join us for ShellHacks, Florida's Largest Hackathon! 1,000+ students from around the world will come together to learn the latest technologies, develop innovative solutions, network with top companies, and more!
                        <br/>
                        <br/>
                        Explore the world of technology through our workshop tracks. Work together with fellow students and mentors to build exciting projects. Meet recruiters and land internships and job opportunities. Win amazing prizes, get tons of cool swag, and more - all at ShellHacks!
                    </p>
                </div>
                <img className="aboutImg" src={Mantarays} alt="asset"/>
            </div>
        );
    }
}

export default AboutPanel;
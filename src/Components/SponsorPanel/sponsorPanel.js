import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './sponsorPanel.css';
import sponsors from '../../config/data/sponsors.json';
import { SponsorTiers } from '../../config/data/sponsorTiers';

function SponsorLogo(props) {
    return (
        <a className={`sponsorLogo ${props.sponsor.tier}`} href={props.sponsor.url} target="_blank" rel="noreferrer">
            <img alt={props.sponsor.name} src={require(`../../SVG/Sponsors/${props.sponsor.logo}`).default}/>
        </a>
    );
}
SponsorLogo.propTypes = {
    sponsor: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
    }).isRequired,
}



class SponsorPanel extends Component {
    render() {
        return (
            <div className="sponsorContainer">
                <h1>Sponsored By</h1>
                <div className="sponsorLogoContainer"> 
                    {SponsorTiers.map((sponsorTier) => {
                        return sponsors.map((sponsor, key) => {
                            return sponsor.tier === sponsorTier ? <SponsorLogo key={key} sponsor={sponsor}/> : null;
                        });
                    })}
                </div>
                <h1>With 🤍 from ShellHacks</h1>
            </div>
        );
    }
}

export default SponsorPanel;
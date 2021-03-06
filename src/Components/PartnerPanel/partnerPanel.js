import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './partnerPanel.css';
import partners from '../../config/data/partners.json';

function PartnerLogo(props) {
    return (
        <a className="partnerLogo" href={props.partner.url} target="_blank" rel="noreferrer noopener">
            <img alt={props.partner.name} src={require(`../../SVG/Partners/${props.partner.logo}`).default} />
        </a>
    );
}
PartnerLogo.propTypes = {
    partner: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
}



class PartnerPanel extends Component {
    render() {
        return (
            <div className="partnerContainer">
                <h2 className="partnerTitle">Community Partners</h2>
                <div className="partnerLogoContainer"> 
                    {partners.map((partner, key) => 
                        <PartnerLogo key={key} partner={partner}/>
                    )}
                </div>
            </div>
        );
    }
}

export default PartnerPanel;
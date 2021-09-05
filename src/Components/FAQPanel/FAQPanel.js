import React, { Component, useState } from 'react';
import './FAQPanel.css';
import PropTypes from 'prop-types';
import faqs from '../../config/data/faqs.json';
import Sharks from '../../SVG/Shark_Squid.svg';

function FAQItem(props) {
    const [selected, setSelected] = useState(false);
    const handleClick = () => setSelected(!selected);

    return (
        <div className="FAQItem">
            <div className={["questionContainer", selected ? "selectedBackground" : "unselectedBackground"].join(" ")} onClick={handleClick}>
                <h2 className="question">{props.question}</h2>
            </div>
            {selected ?
            <p className="answer">{props.answer}</p>
            : null}
        </div>
    );
}
FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};

class FAQPanel extends Component {
    render() {
        return (
            <div className="FAQContainer">
                <h1 className="FAQTitle">Frequently Asked Questions</h1>
                <div className="FAQList">
                    {faqs && faqs.map((faq, index) => <FAQItem question={faq.question} answer={faq.answer} key={index} />)}
                </div>
                <img className="FAQImg" src={Sharks} alt="Sharks >:)" />
            </div>
        )
    }
}

export default FAQPanel;
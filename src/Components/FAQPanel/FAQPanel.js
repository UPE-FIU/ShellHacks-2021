import React, { Component, useState } from 'react';
import './FAQPanel.css';
import PropTypes from 'prop-types';
import faqs from '../../config/data/faqs.json';
import plus from '../../SVG/plus.svg'


function FAQItem(props) {
    const [selected, setSelected] = useState(false);
    const handleClick = () => setSelected(!selected);

    return (
        <div className="FAQ" onClick={handleClick}>
            <div className={["questionContainer", selected ? "selectedBackground" : "unselectedBackground"].join(" ")}>
                <img alt="plus" className="plus" src={plus}/>
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
                <h1 className="title">Frequently Asked Questions</h1>
                <div className="FAQList">
                    {faqs && faqs.map((faq, index) => <FAQItem question={faq.question} answer={faq.answer} key={index} />)}
                </div>
            </div>
        )
    }
}

export default FAQPanel;
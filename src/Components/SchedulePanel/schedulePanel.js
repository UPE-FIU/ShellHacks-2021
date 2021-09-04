import React, { Component } from 'react';
import './schedulePanel.css';
import PropTypes from 'prop-types';
import schedule from '../../config/data/schedule.json';
import ShortSkyline from '../../SVG/Short_Skyline.svg';

function ScheduleButton(props) {
    const handleClick = () => props.action(props.id);

    return (
        <div className={["scheduleButton", props.isSelected ? "selectedButton" : "unselectedButton"].join(" ")} onClick={handleClick}>
            <p className="scheduleButtonTitle">{props.title}</p>
        </div>
    );
}
ScheduleButton.propTypes = {
    action: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};

function ScheduleItem(props) {
    return (
        <div className="scheduleItem">
            <h2 className="scheduleItemTitle">{props.title}</h2>
            <p className="scheduleItemDescription">{props.description}</p>
        </div>
    );
}
ScheduleItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

class SchedulePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 1
        };
    }

    render() {
        const setDay = input => {
            this.setState({ day: input });
        };

        const { friday, saturday, sunday, defaultDay } = schedule;
        let daySchedule = defaultDay;

        switch (this.state.day) {
            case 1:
                daySchedule = friday;
                break;
            case 2:
                daySchedule = saturday;
                break;
            case 3:
                daySchedule = sunday;
                break;
            default:
                daySchedule = defaultDay;
                break;
        }


        return (
            <div className="scheduleContainer">
                <h1 className="scheduleTitle">Schedule</h1>
                <div className="scheduleButtonContainer">
                    <ScheduleButton title="Friday, Sept. 24" id={1} isSelected={this.state.day === 1} action={setDay} />
                    <ScheduleButton title="Saturday, Sept. 25" id={2} isSelected={this.state.day === 2} action={setDay} />
                    <ScheduleButton title="Sunday, Sept. 26" id={3} isSelected={this.state.day === 3} action={setDay} />
                </div>
                <div className="scheduleList">
                    {
                        daySchedule && daySchedule.map((event, index) => <ScheduleItem title={event.title} description={event.description} key={index} />)
                    }
                </div>
                <img className="scheduleImage" alt="Short Skyline" src={ShortSkyline} />
            </div>
        )
    }
}

export default SchedulePanel;
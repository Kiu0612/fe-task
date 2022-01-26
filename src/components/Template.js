import React from "react";
import PropTypes from "prop-types";
import dummyPreview from "../assets/icon/dummyPreview.svg";
import Moment from "react-moment";

export default function Template({ template: { id, title, date, state } }) {
    return (
        <div className="wrapper-template">
            <div className="wrapper-template-header">
                <img src={dummyPreview} alt="preview" />
            </div>
            <div className="wrapper-template-title">{title}</div>
            <div className="wrapper-template-footer">
                <span className="icon-time" />
                <h6>
                    <Moment fromNow>{date}</Moment>
                </h6>
            </div>
        </div>
    );
}

Template.propTypes = {
    /** Composition of the task */
    template: PropTypes.shape({
        /** Id of the task */
        id: PropTypes.string.isRequired,
        /** Title of the task */
        title: PropTypes.string.isRequired,
        /** Date of the task **/
        date: PropTypes.string.isRequired,
        /** Current state of the task */
        state: PropTypes.string.isRequired,
    }),
};

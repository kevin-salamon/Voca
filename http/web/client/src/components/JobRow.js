import React from 'react';
import "../style.css";
import { removeJob } from "../utils/API";

const JobRow = (props) => {
    return (
        <div className="job-row">
            <h3 className="job-item">{props.title}</h3>
            <h3 className="job-item">{props.employer}</h3>
            <h3 className="job-item">{props.location}</h3>
            <h3 className="job-item">{props.notes}</h3>
            <h3 className="job-item">{props.followup}</h3>
        </div>
    );
}

export default JobRow;
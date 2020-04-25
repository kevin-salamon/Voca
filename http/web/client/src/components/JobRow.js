import React from 'react';
import "../style.css";
import { removeJob } from "../utils/API";
import DatePicker from 'react-date-picker';


const JobRow = (props) => {
    return (
        <div className="job-row">
            <h3 className="job-title">{props.title}</h3>
            <h3 className="job-item">{props.employer}</h3>
            <h3 className="job-item">{props.location}</h3>
            <h3 className="job-notes">{props.notes}</h3>

            <DatePicker
                onChange={props.onChange}
                value={props.date}
            />

        </div>
    );
}

export default JobRow;
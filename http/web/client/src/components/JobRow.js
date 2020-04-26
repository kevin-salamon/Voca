import React from 'react';
import "../style.css";
import DatePicker from 'react-date-picker';


const JobRow = (props) => {

    function onChange(date) {
        console.log("onchange date: ", date)
        let tempDate = JSON.stringify(date)
        let transDate = tempDate.slice(0,11)
        let newJobStatus = {
          followDate:  transDate
        }
        console.log("newJobStatus: ", newJobStatus)
        props.handleUpdateJob(props.id,newJobStatus)
    }

    // console.log("date: ",props.date)
    // console.log("followup: ",new Date(props.followup))
    return (
        <div className="job-row">
            <h3 className="job-title">{props.title}</h3>
            <h3 className="job-item">{props.employer}</h3>
            <h3 className="job-item">{props.location}</h3>
            <h3 className="job-notes">{props.notes}</h3>
            <DatePicker
                className="job-end"
                onSelect={props.onSelect}
                onChange={onChange}
                value={new Date(props.followup)}
            />
            <div className="remove-row">
                <button className="remove-button" onClick={() => props.handleRemoveJob(props.id)}>X</button>
            </div>
        </div>
    );
}

export default JobRow;
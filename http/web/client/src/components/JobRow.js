import React from 'react';
import "../style.css";
import DatePicker from 'react-date-picker';
import NoteModal from "./NoteModal"


const JobRow = (props) => {

    function onChange(date) {
        // console.log("onchange date: ", date)
        let tempDate = JSON.stringify(date)
        let transDate = tempDate.slice(0, 11)
        let newJobStatus = {
            followDate: transDate
        }
        console.log("newJobStatus: ", newJobStatus)
        props.handleUpdateJob(props.id, newJobStatus)
    }
    let diff = 0;
    let nowDate = new Date();
    let color = "";
    function calcDate(importDate) {

        // let tempDate = JSON.stringify(importDate)
        let transDate = new Date(importDate)
        console.log("transDate: ", transDate.getTime())
        console.log("nowDate: ", nowDate.getTime())
        diff = Math.floor((transDate.getTime() - nowDate.getTime()) / 1000 / 60 / 60 / 24)
        console.log("diff: ", diff)
        if (diff > 7) {
            color = "lightskyblue"
        } else if (diff > 2 && diff <= 7) {
            color = "green"
        } else if (diff <= 2 && diff >= 0) {
            color = "red"
        } else {
            color = "gray"
        }
        console.log("color: ", color)
    }
    calcDate(props.followup)
    // console.log("date: ",props.date)
    // console.log("followup: ",new Date(props.followup))
    return (
        <div className="job-row" style={{ backgroundColor: color }}>
            <h3 className="job-title">{props.title}</h3>
            <h3 className="job-item">{props.employer}</h3>
            <h3 className="job-item">{props.location}</h3>
            <h3 className="job-notes">
                <NoteModal
                    key = {props.id}
                    id = {props.id}
                    notes = {props.notes}
                    handleUpdateJob={props.handleUpdateJob}
                />
            </h3>
            {/* <h3 className="job-notes">{props.notes}</h3> */}
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
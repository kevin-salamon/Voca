import React from 'react';
import "./style.css";
import { saveJob, getSavedJobs, removeJob } from "./utils/API";
import JobModal from "./components/JobModal";
import JobRow from "./components/JobRow.js";

class Homepage extends React.Component {

    state= {
      joblist: [],
    }
  
  
    render() {
      return (
        <div>
          <nav className="navbar my-nav">
            <div className="nav-title">Voca</div>
            <JobModal />
          </nav>
          <div className="job-area text-center">
            <JobRow
            title="Test Title"
            employer="Test Employer"
            location="Test Location"
            notes="GIVE ME THE MEATS"
            followup="Test Tomorrow"
            />
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;
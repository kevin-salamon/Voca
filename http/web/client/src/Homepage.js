import React from 'react';
import "./style.css";
import { saveJob, getSavedJobs, removeJob } from "./utils/API";
import JobModal from "./components/JobModal";

class Homepage extends React.Component {

    state= {
      joblist: [],
    }
  
  
    render() {
      return (
        <div>
          <nav className="navbar my-nav">
            <div className="nav-title">Jtrackr</div>
            <JobModal />
          </nav>
          <div className="job-area text-center">
            <h1 className="empty-jobs">No jobs here now. Add a job to get started!</h1>
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;
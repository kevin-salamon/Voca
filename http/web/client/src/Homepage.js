import React from 'react';
import "./style.css";
import { saveJob, getSavedJobs, removeJob } from "./utils/API";
import JobModal from "./components/JobModal";
import JobRow from "./components/JobRow.js";
import MaterialTable from 'material-table';


class Homepage extends React.Component {

    state= {
      joblist: [],
    }

    componentDidMount() {
      this.handleGetSavedJobs();
    }

    handleGetSavedJobs = () => {
      getSavedJobs().then(({ data: jobList }) => {
          this.setState({jobList})
      }).catch(err => console.log(err));
    }

    handleRemoveJob = jobId => {
      removeJob(jobId).then(this.handleGetSavedJobs).catch(err => console.log(err));
    }
  

    render() {
      return (
        <div>
          <nav className="navbar my-nav">
            <div className="title-holder">
              <div className="nav-title">Voca</div>
              <div className="nav-subtitle">A simple app for a simpler job search.</div>
            </div>
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
            <JobRow
            title="Fry Cook"
            employer="Krusty Krab"
            location="Bikini Bottom"
            notes="STILL NO PICKLESSSSS"
            followup="everyday"
            />
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;
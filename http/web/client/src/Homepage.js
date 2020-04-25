import React from 'react';
import "./style.css";
import { saveJob, getSavedJobs, removeJob } from "./utils/API";
import JobModal from "./components/JobModal";
import JobRow from "./components/JobRow.js";
import MaterialTable from 'material-table';


class Homepage extends React.Component {

    state = {
      jobList: [],
    }

    componentDidMount() {
      this.handleGetSavedJobs();
    }

    handleGetSavedJobs = () => {
      getSavedJobs().then((resp) => {
          this.setState({jobList: resp.data})
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
          {!this.state.jobList ? (
                        <h2 className="empty-jobs">No jobs added yet. Add a job to begin!</h2>
                    ) : (
                        this.state.jobList.map(job => {
                            return (
                              <JobRow
                                key={job._id}
                                title={job.title}
                                employer={job.employer}
                                location={job.location}
                                notes={job.note}
                                followup={job.followDate}
                                />
                            );
                        })
                    )}
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;
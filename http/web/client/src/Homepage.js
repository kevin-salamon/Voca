import React from 'react';
import "./style.css";
import SearchForm from "./components/searchForm"
import { saveJob, getSavedJobs, removeJob } from "./utils/API";
import JobModal from "./components/JobModal";
import JobRow from "./components/JobRow.js";


class Homepage extends React.Component {

  state = {
    jobList: [],
    searched: "",
    toBeSearched: []
  }

  componentDidMount() {
    this.handleGetSavedJobs();
    console.log("state"+this.state.jobList)
  }

  handleGetSavedJobs = () => {
    getSavedJobs().then((resp) => {
      this.setState({ jobList: resp.data })
    }).catch(err => console.log(err));
  }

  handleRemoveJob = jobId => {
    removeJob(jobId).then(this.handleGetSavedJobs).catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      searched: ""
    });
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      searched: value,
      toBeSearched: this.state.jobList.filter(job => job.title.match(value))
    });
  };


  render() {
    console.log(this.state)
    return (
      <div>
        <nav className="navbar my-nav">
          <div className="title-holder">
            <div className="nav-title">Voca</div>
            <div className="nav-subtitle">A simple app for a simpler job search.</div>
          </div>
          <JobModal />
        </nav>
        <SearchForm
          search={this.state.searched}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
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
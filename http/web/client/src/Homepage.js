import React from 'react';
import "./style.css";
import SearchForm from "./components/searchForm"
import { getSavedJobs, removeJob, updateJob } from "./utils/API";
import JobModal from "./components/JobModal";
import JobRow from "./components/JobRow.js";


class Homepage extends React.Component {

  state = {
    // jobList: [],
    searched: "",
    toBeSearched: [],
    // date: new Date()
  }

  componentDidMount() {
    this.handleGetSavedJobs();
    // console.log("state"+this.state.jobList)
  }

  sortAlgoTitle = (arr) => {
    return arr.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
  }

  sortByTitle = () => {
    this.setState({ toBeSearched: this.sortAlgoTitle(this.state.toBeSearched)});
  }

  sortAlgoEmployer = (arr) => {
    return arr.sort((a, b) => a.employer.toLowerCase() > b.employer.toLowerCase() ? 1 : -1);
  }

  sortByEmployer = () => {
    this.setState({ toBeSearched: this.sortAlgoEmployer(this.state.toBeSearched)});
  }

  sortAlgoLocation = (arr) => {
    return arr.sort((a, b) => a.location.toLowerCase() > b.location.toLowerCase() ? 1 : -1);
  }

  sortByLocation = () => {
    this.setState({ toBeSearched: this.sortAlgoLocation(this.state.toBeSearched)});
  }

  handleGetSavedJobs = () => {
    console.log("handleGetSavedJobs:")
    getSavedJobs().then((resp) => {
      // console.log("getSavedJobs:" + resp.data.length)
      // this.setState({ jobList: resp.data })
      this.setState({ toBeSearched: resp.data })
      // console.log("new state:" + this.state.toBeSearched)
    }).catch(err => console.log(err));
  }

  handleRemoveJob = jobId => {
    removeJob(jobId).then(this.handleGetSavedJobs).catch(err => console.log(err));
  }
  
  handleUpdateJob = (JobId, newJobStatus) => {
    console.log("JobId: ",JobId)
    console.log("newJobStatus: ",newJobStatus)
    updateJob(JobId, newJobStatus)
      .then(this.handleGetSavedJobs)
      .catch(err => console.log(err));
  }

  // onChange = jobId => {
  //   console.log("Jobid: ",jobId)
  //   selectedDateId = jobId;
  // }

  // onSelect = date => {
  //   console.log("onSelect date: ",date)
  // }
  onChange = date => {
    console.log("onchange date: ",date)
    this.setState({ date: date })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.handleGetSavedJobs()
    this.setState({
      searched: ""
      // jobList: this.state.toBeSearched
    });

  };

  handleInputChange = event => {
    const { value } = event.target;
    console.log("value ", event.targer)
    // if(value === ""){
    //   this.handleGetSavedJobs()
    // }else{
    this.setState({
      searched: value,
      // toBeSearched: this.state.jobList.filter(job => job.title.match(value))
      toBeSearched: this.state.toBeSearched.filter(job => job.title.match(value))
    });
    // }
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
          <div className="interactive-holder">
            <SearchForm
              search={this.state.searched}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <JobModal
              handleGetSavedJobs={this.handleGetSavedJobs}
            />
          </div>
        </nav>
        <div className="state-holder">
          <p className="state-title" onClick={this.sortByTitle}>TITLE</p>
          <p className="state-item" onClick={this.sortByEmployer}>EMPLOYER</p>
          <p className="state-item" onClick={this.sortByLocation}>LOCATION</p>
          <p className="state-note">NOTES</p>
          <p className="state-followup">FOLLOW-UP</p>
        </div>
        <div className="job-area text-center">
          {/* {!this.state.jobList ? ( */}
          {!this.state.toBeSearched ? (
            <h2 className="empty-jobs">No jobs added yet. Add a job to begin!</h2>
          ) : (
              // this.state.jobList.map(job => {
              this.state.toBeSearched.map(job => {

                return (
                  <JobRow
                    key={job._id}
                    id={job._id}
                    title={job.title}
                    employer={job.employer}
                    location={job.location}
                    notes={job.note}
                    followup={job.followDate}
                    handleUpdateJob={this.handleUpdateJob}
                    handleRemoveJob={this.handleRemoveJob}
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
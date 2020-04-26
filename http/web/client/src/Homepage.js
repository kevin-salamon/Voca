import React from 'react';
import "./style.css";
import SearchForm from "./components/searchForm"
import { getSavedJobs, removeJob } from "./utils/API";
import JobModal from "./components/JobModal";
import JobRow from "./components/JobRow.js";
import DatePicker from 'react-date-picker';


class Homepage extends React.Component {

  state = {
    // jobList: [],
    searched: "",
    toBeSearched: [],
    date: new Date()
  }

  componentDidMount() {
    this.handleGetSavedJobs();
    // console.log("state"+this.state.jobList)
  }


  handleGetSavedJobs = () => {
    getSavedJobs().then((resp) => {
      // this.setState({ jobList: resp.data })
      this.setState({ toBeSearched: resp.data })
    }).catch(err => console.log(err));
  }

  handleRemoveJob = jobId => {
    removeJob(jobId).then(this.handleGetSavedJobs).catch(err => console.log(err));
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
  onChange = date => {

    this.setState({ date: date })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <nav className="navbar my-nav">
          <div className="title-holder">
            <div className="nav-title">Voca</div>
            <div className="nav-subtitle">A simple app for a simpler job search.</div>
          </div>
          <SearchForm
            search={this.state.searched}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <JobModal />
        </nav>
        <div className="state-holder">
          <p className="state-title">TITLE</p>
          <p className="state-item">EMPLOYER</p>
          <p className="state-item">LOCATION</p>
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
                console.log("Job ID " + job._id)
                return (
                  <JobRow
                    key={job._id}
                    id={job._id}
                    title={job.title}
                    employer={job.employer}
                    location={job.location}
                    notes={job.note}
                    followup={job.followDate}
                    onChange={this.onChange}
                    date={this.state.date}
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
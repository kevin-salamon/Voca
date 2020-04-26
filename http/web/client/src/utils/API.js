import axios from "axios";

export const FLASK_BASE_URI = 'http://localhost:4433'

export const saveJob = jobData => {
  console.log("Attempting to post data to the below route:");
  return axios.post(FLASK_BASE_URI + "/api/jobs", jobData);
}

export const updateJob = (jobId, jobData) => {
  console.log("Attempting to PUT data to the below route:")
  return axios.put(FLASK_BASE_URI + `/api/jobs/${jobId}`, jobData)
}

export const getSavedJobs = () => {
  console.log("Retrieving data from below route:");
  return axios.get(FLASK_BASE_URI + "/api/jobs");
}

export const removeJob = jobId => {
  console.log("Attempting to remove data from below route:");
  return axios.delete(FLASK_BASE_URI + `/api/jobs/${jobId}`);
}


export default {
  saveJob,
  getSavedJobs,
  removeJob,
  updateJob
}
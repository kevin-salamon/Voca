import axios from "axios";

export const saveJob = jobData => {
  console.log("Attempting to post data to the below route:");
  return axios.post("/api/jobs", jobData);
}

export const updateJob = (jobId, jobData) => {
  console.log("Attempting to PUT data to the below route:")
  return axios.put(`/api/jobs/${jobId}`, jobData)
}

export const getSavedJobs = () => {
  console.log("Retrieving data from below route:");
  return axios.get("/api/jobs");
}

export const removeJob = jobId => {
  console.log("Attempting to remove data from below route:");
  return axios.delete(`/api/jobs/${jobId}`);
}


export default {
  saveJob,
  updateJob,
  getSavedJobs,
  removeJob,
}
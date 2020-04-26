import React, { useRef, useState } from 'react'
import "../style.css";
import Modal from 'react-bootstrap/Modal';
import { saveJob, getSavedJobs } from "../utils/API";

function JobModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const titleRef = useRef();
    const employerRef = useRef();
    const locationRef = useRef();
    const followUpRef = useRef();
    const noteRef = useRef();

    function handleSubmit(event) {
      event.preventDefault();
      const newJob = {
          title: titleRef.current.value,
          employer: employerRef.current.value,
          location: locationRef.current.value,
          followDate: followUpRef.current.value,
          note: noteRef.current.value
      };

      console.log(newJob); 
      saveJob(newJob)
          .then(res => {
              console.log(res)
          });
      
      handleClose();
      // props.getSavedJobs();
      alert("Job Added");
  }
  
    return (
      <>
        <button variant="primary" className="job-button" onClick={handleShow}>
          Add Job
        </button>
  
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add your new job application details below</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: "rgb(255, 179, 38)"}}>
                    <form>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={titleRef}
                                type="text"
                                placeholder="Job Title"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={employerRef}
                                type="text"
                                placeholder="Employer"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={locationRef}
                                type="text"
                                placeholder="Location"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={followUpRef}
                                type="text"
                                placeholder="Follow-Up Date"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={noteRef}
                                type="text"
                                placeholder="Additional Notes"
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer className="text-center">
                    <button variant="primary" className="job-button-small" onClick={handleSubmit}>
                        Add Job
                    </button>

                </Modal.Footer>
            </Modal>
      </>
    );
}
  
export default JobModal;
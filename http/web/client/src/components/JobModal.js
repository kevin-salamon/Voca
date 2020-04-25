import React, { useRef, useState } from 'react'
import "../style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { saveJob, getSavedJobs, removeJob } from "../utils/API";

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

      console.log(newJob); //refs seem to be working fine, this object is created correctly
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
        <Button variant="primary" onClick={handleShow}>
          Add Job
        </Button>
  
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: "monospace", fontSize: "30px"}}>Add Dish:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group text-center">
                            <input
                                style={{ marginTop: "5%" }}
                                className="input"
                                ref={titleRef}
                                type="text"
                                placeholder="Job Title"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={employerRef}
                                type="text"
                                placeholder="Employer"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={locationRef}
                                type="text"
                                placeholder="Location"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={followUpRef}
                                type="text"
                                placeholder="Follow-Up Date"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={noteRef}
                                type="text"
                                placeholder="Additional Notes"
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer className="text-center">
                    <Button variant="primary" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Add Job
                    </Button>

                </Modal.Footer>
            </Modal>
      </>
    );
}
  
export default JobModal;
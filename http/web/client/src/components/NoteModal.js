import React, { useRef, useState } from 'react'
import "../style.css";
import Modal from 'react-bootstrap/Modal';
import { saveJob } from "../utils/API";

function JobModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const noteRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const newJobStatus = {
            note: noteRef.current.value,
        };

        console.log(newJobStatus);
        props.handleUpdateJob(props.id, newJobStatus)

        handleClose();
        //   alert("Job Added");
    }

    return (
        <>
            {props.notes ? (
                <p variant="primary" onClick={handleShow}>
                    {props.notes}
                </p>
            ) : (
                    <p variant="primary" onClick={handleShow}>
                        Add a new note here
                    </p>
                )}
            <p variant="primary" onClick={handleShow}>

            </p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add your node here!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "rgb(255, 179, 38)" }}>
                    <form>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={noteRef}
                                type="text"
                                placeholder="Job Title"
                                style={{ width: "70%", height: "150px" }}
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
import React from "react";
import './Assignments.css';
import Assignment from "../../../../modal/Assignment";
// import Pdf from "../../../../../assets/images/pdf.png";
import { formatDate } from "../../../../../functions";
import SimpleFileUpload from 'react-simple-file-upload';

import { accessToken } from "../../../../../config";
import useAxiosPost from "../../../../../customHooks/useAxiosPost";
import BackdropLoader from ".././../../../Loader/BackdropLoader";
import useAlert from "../../../../../customHooks/useAlert";

const Assignments = ({ assignments }) => {
  const alert = useAlert();

  const [show, setShow] = React.useState(false);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [answerSubmitted, setAnswerSubmitted] = React.useState('');
  const [uploadedAnswerUrl, setUploadedAnswerUrl] = React.useState('');
  const [classId, setClassId] = React.useState('');
  const [teacherId, setTeacherId] = React.useState('');
  const [assignmentId, setAssignmentId] = React.useState('');

  const handleFile = (url) => {
    setUploadedAnswerUrl(url);
  };

  const { loading, error, success, fetchData } = useAxiosPost({
    method: "post",
    url: "assignments?access_token=" + accessToken,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      teacherId,
      assignmentId,
      name,
      description,
      classId,
      uploadedAnswerUrl,
    }),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  React.useEffect(() => {
    if (error) {
      alert("Error", error, "error", "Ok", () => { });
    }
    if (success) {
      alert("Success", "Asignment Submitted Successfully", "success", "Ok", () => {
        setShow(false);
        window.location.href = "/dashboard";
      });
    }
  }, [error, alert, success]);

  return (
    <>
      {loading && <BackdropLoader />}
      <div className="assingments-div">
        {assignments && assignments.length === 0 ? 'empty'
          :
          <div className="asignment-item-list">
            {assignments && assignments.map((content) => (
              <div className="assignment-item" key={content.id}>
                <div className="asignment-item-top">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="8" fill="#F3E4FF" />
                    <path d="M17 10C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H17Z" fill="#8F00FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 13C12 12.4696 12.2107 11.9609 12.5858 11.5858C12.9609 11.2107 13.4696 11 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14H19C19.7956 14 20.5587 13.6839 21.1213 13.1213C21.6839 12.5587 22 11.7956 22 11C22.5304 11 23.0391 11.2107 23.4142 11.5858C23.7893 11.9609 24 12.4696 24 13V24C24 24.5304 23.7893 25.0391 23.4142 25.4142C23.0391 25.7893 22.5304 26 22 26H14C13.4696 26 12.9609 25.7893 12.5858 25.4142C12.2107 25.0391 12 24.5304 12 24V13ZM15 17C14.7348 17 14.4804 17.1054 14.2929 17.2929C14.1054 17.4804 14 17.7348 14 18C14 18.2652 14.1054 18.5196 14.2929 18.7071C14.4804 18.8946 14.7348 19 15 19H15.01C15.2752 19 15.5296 18.8946 15.7171 18.7071C15.9046 18.5196 16.01 18.2652 16.01 18C16.01 17.7348 15.9046 17.4804 15.7171 17.2929C15.5296 17.1054 15.2752 17 15.01 17H15ZM18 17C17.7348 17 17.4804 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4804 18.8946 17.7348 19 18 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17H18ZM15 21C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H15.01C15.2752 23 15.5296 22.8946 15.7171 22.7071C15.9046 22.5196 16.01 22.2652 16.01 22C16.01 21.7348 15.9046 21.4804 15.7171 21.2929C15.5296 21.1054 15.2752 21 15.01 21H15ZM18 21C17.7348 21 17.4804 21.1054 17.2929 21.2929C17.1054 21.4804 17 21.7348 17 22C17 22.2652 17.1054 22.5196 17.2929 22.7071C17.4804 22.8946 17.7348 23 18 23H21C21.2652 23 21.5196 22.8946 21.7071 22.7071C21.8946 22.5196 22 22.2652 22 22C22 21.7348 21.8946 21.4804 21.7071 21.2929C21.5196 21.1054 21.2652 21 21 21H18Z" fill="#8F00FF" />
                  </svg>
                  <div className="assignment-subject-tutor">
                    <h5>{content.subject}</h5>
                    <p>{content.tutor}</p>
                  </div>
                </div>
                <div className="assingment-item-body">
                  <div className="assingment-dates">
                    <p>Date given</p>
                    <h6>{formatDate(content.createdAt)}</h6>
                  </div>
                  <div className="assingment-dates">
                    <p>Submission date</p>
                    <h6>{content.submission_date}</h6>
                  </div>
                </div>
                <div className="assignment-footer">
                  <div className={`assigment-status ${content.status === "Submitted" ? "submitted" : "unattended"}`}>
                    <p>Unattended</p>
                  </div>

                  <div>
                    <button className="upload_assignment" onClick={() => {
                      setShow(true);
                      setName(content.name);
                      // setDescription(content.description);
                      setClassId(content.classId);
                      setTeacherId(content.ownerId);
                      setAssignmentId(content.id);
                    }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4.5125L7 1.5125L10 4.5125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 1.5125V9.5125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 11.5125C4.89 12.8125 9.11 12.8125 13 11.5125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        }

      </div>

      <Assignment
        show={show}
        onClose={() => setShow(false)}
        children={
          <div className="upload_assignment_modal">
            <h3>Upload New Assignment</h3>
            <p>Input the details of the new assignment you are submitting.</p>

            <div className="upload_assignment_form">
              <div className="upload_assignment_form_item">
                <label htmlFor="name">Name</label>
                <input type="text" name="subject" id="subject"
                  value={name}
                  readOnly
                />
              </div>

              <div className="upload_assignment_form_item">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="upload_assignment_form_item">
                <label htmlFor="answerSubmitted">Answer</label>
                <textarea name="answerSubmitted" id="answerSubmitted" cols="30" rows="2"
                  value={answerSubmitted}
                  onChange={(e) => setAnswerSubmitted(e.target.value)}
                ></textarea>
              </div>

            </div>



            {/* select file */}
            <div className="upload_web">
              <SimpleFileUpload
                apiKey="7bf4c18d68525050ba347ff1ccf39e6c"
                onSuccess={handleFile}
                preview={true}
                width="400"
                height="100"
              />
            </div>

            <div className="upload_mobile">
              <SimpleFileUpload
                apiKey="7bf4c18d68525050ba347ff1ccf39e6c"
                onSuccess={handleFile}
                preview={true}
                width="310"
                height="100"
              />
            </div>

            {/* cancel and submit btn */}
            <div className="upload_assignment_form_item_btn">
              <button className="cancel_ass" onClick={() => {
                setShow(false);
                setName("");
                setDescription("");
                setClassId("");
                setTeacherId("");
                setAssignmentId("");
                setAnswerSubmitted("");
                setUploadedAnswerUrl("");
              }}>
                Cancel
              </button>
              <button className="submit_ass" onClick={handleSubmit}
                disabled={answerSubmitted === "" || uploadedAnswerUrl === "" || description === "" ? true : false}
                style={{ backgroundColor: answerSubmitted === "" || uploadedAnswerUrl === "" || description === "" ? "#ccc" : "#7777F9" }}
              >
                Submit Assignment
              </button>
            </div>

          </div>
        }
      />
    </>
  );
};

export default Assignments;

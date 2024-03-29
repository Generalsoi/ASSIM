import React from "react";
import JpegImg from "../../../../assets/images/bxs-file-jpg.png";
import DocImg from "../../../../assets/images/bxs-file-doc.png";
import JsonImg from "../../../../assets/images/bxs-file-json.png";
import TxtImg from "../../../../assets/images/bxs-file-txt.png";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

const NewDocuments = ({documents}) => {
  const newDocumentContents = [
    {
      id: 1,
      docName: "FineArt.jpg",
      docSize: "12.6mb",
      timeUploaded: "3 hours ago",
      image: JpegImg,
    },
    {
      id: 2,
      docName: "Physics.doc",
      docSize: "985kb",
      timeUploaded: "3 hours ago",
      image: DocImg,
    },
    {
      id: 3,
      docName: "Algebra.txt",
      docSize: "54kb",
      timeUploaded: "3 hours ago",
      image: TxtImg,
    },
    {
      id: 4,
      docName: "English.json",
      docSize: "1.4mb",
      timeUploaded: "3 hours ago",
      image: JsonImg,
    },
  ];

  return (
    <React.Fragment>
      <h5 className="documents-section-heading">New Documents</h5>
      <div className="documents">
        {documents && documents.map((content) => (
          <div className="document" key={content.id}>
            <div className="document-img">
              <img src={content.image} alt="" />
            </div>
            <div className="document-details">
              <div>
                <p>{content.docName}</p>
                <p>{content.docSize}</p>
              </div>
              <div>
                <p>{content.timeUploaded}</p>
                <CloudDownloadOutlinedIcon className="document-download-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default NewDocuments;

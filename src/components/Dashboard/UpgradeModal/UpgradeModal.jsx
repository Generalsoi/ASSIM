import React from "react";
import "./UpgradeModal.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Computer from "../../../assets/images/Computer.png";

const UpgradeModal = (props) => {
  const { setUpgradeModal } = props;

  return (
    <div className="modal-background" onClick={() => setUpgradeModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="close-modal">
            <CloseOutlinedIcon onClick={() => setUpgradeModal(false)} />
          </div>
          <div className="modal-content-heading">
            <img src={Computer} alt="" />
            <h4>Upgrade Your membership</h4>
          </div>

          <div className="modal-content-details">
            <div>
              <p>Free</p>
            </div>
            <div>
              <p>
                <span>10</span> courses
              </p>
            </div>
            <div>
              <p>
                <span>$0</span> forever
              </p>
            </div>
            <div>
              <p>Choose Plan</p>
            </div>
          </div>

          <div className="modal-content-details">
            <div>
              <p>Standard</p>
            </div>
            <div>
              <p>
                <span>20</span> courses
              </p>
            </div>
            <div>
              <p>
                <span>$10</span> forever
              </p>
            </div>
            <div>
              <p>Choose Plan</p>
            </div>
          </div>

          <div className="modal-content-details">
            <div>
              <p>Premium</p>
            </div>
            <div>
              <p>Unlimited</p>
            </div>
            <div>
              <p>
                <span>$40</span> forever
              </p>
            </div>
            <div>
              <p>Choose Plan</p>
            </div>
          </div>

          <div className="more-information">
            <a href="/">
              <p>Read more information about our plans</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;

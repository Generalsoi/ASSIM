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
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;

import React from "react";
import "./UpgradeModal.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const UpgradeModal = (props) => {
  const { setUpgradeModal } = props;

  return (
    <div className="modal-background" onClick={() => setUpgradeModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="close-modal">
            <CloseOutlinedIcon onClick={() => setUpgradeModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;

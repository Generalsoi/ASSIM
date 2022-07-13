import React from "react";
import "./Billing.css";

const Billing = () => {
  return (
    <div className="billing">
      <div className="billing-heading">
        <h5>Billing</h5>
        <p>Manage your billing and payment details.</p>
      </div>

      <div className="plan-and-payment-method">
        <div className="plan"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Billing;

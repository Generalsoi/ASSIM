import React, { useState } from "react";
import UpgradeModal from "../../../UpgradeModal/UpgradeModal";
import "./Billing.css";

const Billing = () => {
  const [upgrade, setUpgradeModal] = useState(false);
  return (
    <div className="billing">
      <div className="billing-heading">
        <h5>Billing</h5>
        <p>Manage your billing and payment details.</p>
      </div>

      <div className="plan-payment-container">
        <div className="plan-payment">
          <div className="plan-payment-top">
            <div className="plan-payment-name">
              <h5>Free plan</h5>
              <p>Our most popular plan for small teams.</p>
            </div>
            <div className="plan-amount">
              <h1>NGN 0</h1>
              <p>per month</p>
            </div>
          </div>
          <div className="plan-payment-body">
            <div className="courses-taken">
              <h6>4 of 10 courses taken</h6>
              <svg width="441" height="9" viewBox="0 0 441 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.375977" y="0.939941" width="440.346" height="7.45865" rx="3.72932" fill="#F9F5FF" />
                <rect x="0.375977" y="0.939941" width="328.532" height="7.45865" rx="3.72932" fill="#7777F9" />
              </svg>
            </div>
          </div>
          <div className="plan-payment-footer">
            <div className="upgrade-plan" onClick={() => setUpgradeModal(true)}>
              <p>Upgrade Plan</p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.41602 13.8173L14.1854 6.04785M14.1854 6.04785H6.41602M14.1854 6.04785V13.8173" stroke="#7777F9" stroke-width="1.55699" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="plan-payment">
          <div className="plan-payment-top">
            <div className="plan-payment-name">
              <h5>Payment method</h5>
              <p>Change how you pay for your plan.</p>
            </div>
          </div>
          <div className="plan-payment-body">
            <div className="payment-card">
              <div className="card-details">
                <div className="card-type">
                  <h3>VISA</h3>
                </div>
                <div className="card-info">
                  <h6>Visa ending in 1234</h6>
                  <p style={{ marginBottom: '1rem' }}>Expiry 06/2024</p>

                  <div className="card-email">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_431_26548)">
                        <path d="M13.9604 4.54584C13.9604 3.86213 13.401 3.30273 12.7173 3.30273H2.7724C2.0887 3.30273 1.5293 3.86213 1.5293 4.54584M13.9604 4.54584V12.0045C13.9604 12.6882 13.401 13.2476 12.7173 13.2476H2.7724C2.0887 13.2476 1.5293 12.6882 1.5293 12.0045V4.54584M13.9604 4.54584L7.74484 8.89672L1.5293 4.54584" stroke="#101828" stroke-width="1.24311" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_431_26548">
                          <rect width="14.9173" height="14.9173" fill="white" transform="translate(0.286133 0.816406)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>billing@untitledui.com</p>
                  </div>
                </div>
              </div>
              <div className="edit-card">
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="billing-invoicing-container">
        <div className="add-payment-method">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Add new payment method</p>
        </div>
        <div className="billing-invoicing">
          <div className="billing-invoicing-head">
            <div className="billing-invoincing-head-text">
              <h5>Billing and invoicing</h5>
              <p>See payment history below</p>
            </div>
            <div className="billing-invoincing-head-download">
              <div className="download-btn">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_431_26873)">
                    <path d="M6.57671 12.9387L9.60271 15.9647M9.60271 15.9647L12.6287 12.9387M9.60271 15.9647V9.15619M16.3204 13.7633C16.9781 13.3008 17.4714 12.6408 17.7285 11.879C17.9857 11.1172 17.9934 10.2932 17.7505 9.52675C17.5077 8.76027 17.0269 8.09111 16.378 7.61638C15.7291 7.14166 14.9458 6.88606 14.1417 6.88669H13.1885C12.961 5.99997 12.5353 5.17643 11.9434 4.47805C11.3516 3.77967 10.609 3.22466 9.77157 2.85481C8.93417 2.48495 8.02377 2.30988 7.10892 2.34278C6.19407 2.37568 5.29861 2.61569 4.48994 3.04474C3.68127 3.4738 2.98047 4.08071 2.4403 4.8198C1.90013 5.55889 1.53466 6.41088 1.37142 7.31165C1.20817 8.21242 1.2514 9.13849 1.49784 10.0201C1.74429 10.9018 2.18753 11.716 2.7942 12.4016" stroke="#101828" stroke-width="1.51603" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_431_26873">
                      <rect width="18.156" height="18.156" fill="white" transform="translate(0.524902 0.078125)" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Download all</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {upgrade && <UpgradeModal setUpgradeModal={setUpgradeModal} />}
    </div>
  );
};

export default Billing;

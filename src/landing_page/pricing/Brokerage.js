import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <div className="col-8">
            <div className="text-center">
                <a href="" style={{ textDecoration: "none" }} className="text-center">
            Brokerage calculator
          </a>
          <h3 className="fs-5 text-center"></h3>
            </div>
          
          <ul className="text-muted mt-4">
            <li className="mt-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mt-3">Digital contract notes will be sent via e-mail.</li>
            <li className="mt-3">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mt-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mt-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mt-3">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" style={{ textDecoration: "none" }}>
            List of charges
          </a>
          <h3 className="fs-5"></h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

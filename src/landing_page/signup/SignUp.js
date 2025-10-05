import React, { useState } from "react";

function SignUp() {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side - Illustration */}
        <div className="col-md-6 col-12 text-center">
          <img
            src="media/images/account_open.svg"
            alt="Signup Illustration"
            className="img-fluid"
          />
        </div>

        {/* Right side - Form */}
        <div className="col-md-6 col-12">
          <h2 className="mb-2">Signup now</h2>
          <p className="text-muted mb-4">
            Or track your existing application
          </p>

          {/* Phone Input */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India flag"
                style={{ width: "20px", marginRight: "8px" }}
              />
              +91
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          {/* Get OTP Button */}
          <button className="btn btn-primary w-100 mb-3" onClick={handleSubmit}>
            Get OTP
          </button>

          {message && <p className="text-success">{message}</p>}

          {/* Terms */}
          <p className="text-muted small">
            By proceeding, you agree to the Zerodha{" "}
            <a href="/">terms</a> & <a href="/">privacy policy</a>.
          </p>

          {/* NRI Link */}
          <p className="small">
            Looking to open NRI account? <a href="/">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

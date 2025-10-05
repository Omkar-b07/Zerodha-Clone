import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center text-muted mt-5">
        <h1 className="mt-5"> The Zerodha Universe</h1>
        <p className="fs-5 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col p-3 mt-5">
          <div className="mb-5">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
            ></img>
            <p className="fs-8 mt-3 mb-3">
              Our asset management venture <br></br>that is creating simple and
              transparent index <br></br>funds to help you save for your goals.
            </p>
          </div>

          <div className="mt-5">
            <img
              src="media/images/streakLogo.png"
              style={{ width: "50%" }}
            ></img>
            <p className="fs-8 mt-3">
              Systematic trading platform<br></br>
              that allows you to create and backtest<br></br>
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col p-3 mt-5">
          <div className="mb-5">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "50%" }}
            ></img>
            <p className="fs-8 mt-3 mb-3">
              Options trading platform that lets you<br></br>
              create strategies, analyze positions, and examine<br></br>
              data points like open interest, FII/DII, and more
            </p>
          </div>
          <div className="mb-5 text-muted">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "50%" }}
            ></img>
            <p className=" fs-8 text-muted mt-3 mb-3">
              Thematic investing platform<br></br>
              that helps you invest in diversified<br></br>
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col p-3 mt-5">
          <div className="mb-5">
            <img src="media/images/tijori.svg" style={{ width: "30%" }}></img>
            <p className="fs-8  text-muted mt-3 mb-3">
              Investment research platform<br></br>
              that offers detailed insights on stocks,<br></br>
              sectors, supply chains, and more
            </p>
          </div>
          <div className="mb-5">
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "30%" }}
            ></img>
            <p className="fs-8 mt-3 mb-3 text-muted">
              Personalized advice on life<br></br>
              and health insurance. No spam<br></br>
              and no mis-selling.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;

import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageUrl}></img>
        </div>
        
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={"https://your-dashboard.netlify.app"} target="_blank" rel="noopener noreferrer" style={{textDecoration :'none'}}>Try Demo</a>
            <a href={learnMore} style={{ textDecoration:'none' ,marginLeft:'50px'}}>learn more</a>
          </div>
          <div className="mt-3">
              <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg"></img>
          </a>
          <a href={appStore}>
            <img src="media/images/appStoreBadge.svg"></img>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

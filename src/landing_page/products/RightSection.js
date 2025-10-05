import React from "react";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  kiteConnnect,
  learnMore
}
) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5" style={{ marginTop: "1px" }}>
          <h1>{productName}</h1>
          <p className="">{productDescription}</p>
          <a href={learnMore} style={{ textDecoration:'none' ,marginLeft:'50px'}}>Learn More</a>
        </div>
        <div className="col-6 ">
            <img src={imageUrl}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;

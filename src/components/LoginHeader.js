import React from "react";
let weddingDate = "10/20/2022";

export default () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <span className="countdown">Wedding Date: {weddingDate}</span>
      <h1 className="h1">
      <img style={{ width: 40, height: 40 }} src={"./images/icons/lovebirds.svg"} alt="lovebirds" />
        Login
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        Please enter your login credentials.
      </p>
    </div>
  );
};

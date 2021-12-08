import React from "react";

export default () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <h1 className="h1">
      <img style={{ width: 100, height: 100 }} src={"../icons/lovebirds.svg"} alt="lovebirds" />
        Login
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        Please enter your login credentials.
      </p>
    </div>
  );
};

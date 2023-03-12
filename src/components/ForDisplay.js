import React from "react";
import { useSelector } from "react-redux";
import "./ForDisplay.css"

const ForDisplay = () => {
  const reduxData = useSelector((state) => state.theData);
  console.log(reduxData);
  return (
    <div className="displaydiv">
    <h1>Congratulations! Record Is Saved</h1>
    <hr/>
    <h2>Your Submitted Data Are As Under:</h2>
      <h3>{reduxData.name}</h3>
      <h3>{reduxData.email}</h3>
      <h3>{reduxData.age}</h3>
      <h3>{reduxData.website}</h3>
      <h3>{reduxData.introduction}</h3>
    </div>
  );
};

export default ForDisplay;

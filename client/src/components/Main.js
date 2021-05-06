import { useState, React } from "react";
import "./Main.css";
import "x-frame-bypass";

const Main = ({ title, by, time, score, descendants, url }) => {
  const embedded = ({ url }) => {
    document.querySelector(
      ".show-webpage"
    ).src = `https://cors.bridged.cc/${url}`;
  };

  return (
    <div
      className="container-fluid"
      class="articles mb-3"
      onClick={() => embedded({ url })}
    >
      <h4>{title}</h4>
      {url}
      <br />

      <h5>{by}</h5>
      <p>
        Date: {time}
        <br />
        Score: {score} <br />
        Comments: {descendants}
      </p>
    </div>
  );
};

export default Main;

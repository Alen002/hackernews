import { React } from "react";
import "./Main.css";
import "x-frame-bypass";

const Main = ({ title, by, time, score, descendants, url, kids }) => {
  /* const embedded = ({ url }) => {
    document.querySelector(
      ".show-webpage"
    ).src = `https://cors.bridged.cc/${url}`;
  }; */

  // Convert unix timestamp to date figures
  const convertTimestamp = (timestamp) => {
    const dateNew = new Date(timestamp * 1000);

    const year = dateNew.getFullYear();
    const day = ("0" + dateNew.getDate()).slice(-2);
    var month = ("0" + (dateNew.getMonth() + 1)).slice(-2);
    return `${day}.${month}.${year}`;
  };

  return (
    <div
      className="container-fluid"
      class="articles mb-3"
      /* onClick={() => embedded({ url })} */
    >
      <h4>{title}</h4>
      <a href={url} target="blank">
        {url}
      </a>

      <br />

      <h5>{by}</h5>
      <p>
        Posted: {convertTimestamp(time)}
        <br />
        Score: {score} <br />
        Comments: {descendants}
        {kids}
        <br />
      </p>
    </div>
  );
};

export default Main;

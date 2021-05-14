import { React } from "react";
import "./Main.css";
import "x-frame-bypass";

const Main = ({ title, by, time, score, descendants, url, kids }) => {
  // Convert unix timestamp to date figures
  const convertTimestamp = (timestamp) => {
    const dateNew = new Date(timestamp * 1000);

    const year = dateNew.getFullYear();
    const day = ("0" + dateNew.getDate()).slice(-2);
    var month = ("0" + (dateNew.getMonth() + 1)).slice(-2);
    return `${day}.${month}.${year}`;
  };

  // Calculate how old the news are
  const daysAgo = (timestamp) => {
    const dateOfArticle = new Date(timestamp * 1000);
    const actualDate = new Date();

    const diffTime = Math.abs(actualDate - dateOfArticle);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
    let comment = "days ago";
    if (diffDays == 1) {
      comment = "day ago";
    }
    if (diffDays == 0) {
      comment = "today";
      return `${comment}`;
    }

    return `${diffDays} ${comment}`;
  };

  return (
    <div className="container-fluid" class="articles mb-3">
      <h4>{title}</h4>
      <a href={url} target="blank">
        {url}
      </a>
      <br />
      <h5>{by}</h5>
      <p>
        Posted {daysAgo(time)} <br />
        Date: {convertTimestamp(time)} <br />
        Score: {score} <br />
        Comments: {descendants}
        {kids}
        <br />
      </p>
    </div>
  );
};

export default Main;

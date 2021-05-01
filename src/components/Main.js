import "./Main.css";

const Main = ({ title, by, time, score, descendants, url }) => {
  function embedding({ url }) {
    alert(url);
    <embed src={url}></embed>;
  }

  return (
    <div className="container-fluid">
      <span onClick={() => embedding({ url })}>{url}</span>

      <h4>{title}</h4>

      <h5>{by}</h5>
      <p>Date: {time}</p>
      <p>Score: {score}</p>
      <p>Comments: {descendants}</p>
    </div>
  );
};

export default Main;

/* title
by
time
score -> these are the points
descendants -> these are the comments */

import "./Main.css";

const Main = ({ title, by, time, score, descendants, url }) => {
  return (
    <div className="container-fluid">
      <h5>{url}</h5>
      <h4>{title}</h4>
      <h5>{by}</h5>
      <p>{time}</p>
      <p>{score}</p>
      <p>{descendants}</p>
    </div>
  );
};

export default Main;

/* title
by
time
score -> these are the points
descendants -> these are the comments */

import "./Main.css";

const Main = ({ title, by, time, score, descendants, url }) => {
  function embedding({ url }) {
    alert(url);
    <embed src={url}></embed>;
  }

  return (
    <div className="container-fluid" class="articles mb-4">
      <span onClick={() => embedding({ url })}>{url}</span>

      <h4>{title}</h4>

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

/* title
by
time
score -> these are the points
descendants -> these are the comments */

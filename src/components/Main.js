import "./Main.css";

const Main = ({ title, by, time, score, descendants, url }) => {
  function embedded({ url }) {
    document.querySelector(".show-webpage").src = url;
  }

  return (
    <div
      className="container-fluid"
      class="articles mb-4"
      onClick={() => embedded({ url })}
    >
      <h4>{title}</h4>
      <span>{url}</span>
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

/* title
by
time
score -> these are the points
descendants -> these are the comments */

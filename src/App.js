import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import requests from "./Request";

// Start of APP
const App = () => {
  const [articles, setData] = useState([]);
  const [counter, setCounter] = useState(5);

  // Fetch IDs of topstories
  const fetchData = (more) => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("IDs", data);
        return data;
      })
      .then((data) => {
        // fetch detail information of topstories based on IDs obtained from the first fetch
        return Promise.all(
          data
            .filter((e, x) => x < more)
            .map((
              id // limit fetched articles
            ) =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then((resp) => resp.json())
                .then((json) => {
                  console.log("Articles", json);
                  return json;
                })
            )
        );
      })
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData(100);
  }, []);

  return (
    <div>
      <p>APP</p>
      {articles
        .filter((item, x) => x < counter)
        .map((article, num) => {
          return (
            <>
              <Main key={article.id} {...article} />
              <p>{counter}</p>
            </>
          );
        })}
      <button
        className="btn btn-outline-primary ml-2 mr-2 mb-2"
        onClick={() => {
          setCounter(counter + 5);
          setData(articles);
        }}
      >
        More
      </button>
    </div>
  );
};

export default App;

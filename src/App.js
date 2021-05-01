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
    <div class="container-fluid">
      <div class="row">
        <div class="col col-xl-4 col-lg-4 col-md-4">
          <h2>New Articles</h2>
          {articles
            .filter((item, x) => x < counter)
            .map((article) => {
              return (
                <>
                  <Main key={article.id} {...article} />
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

        <div class="col col-xl-8 col-lg-8 col-md-8">
          <h2>Article</h2>
          <embed
            className="show-webpage"
            type="text/html"
            src="https://octetz.com/docs/2020/2020-05-06-linux-hypervisor-setup/"
            style={{ width: "100%", height: "100%" }}
          ></embed>
        </div>
      </div>
    </div>
  );
};

export default App;

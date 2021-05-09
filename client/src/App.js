import { useEffect, useState, React } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import requests from "./Request";
import "./App.css";

// Start of APP
const App = () => {
  const [articles, setData] = useState([]);
  const [counter, setCounter] = useState(5);
  const [datas, setDatas] = useState([]);

  // fetch IDs of topstories
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
    fetchData(counter);
  }, [counter]);

  async function serverAPI() {
    const response = await fetch("/api/getList");
    const apiResult = await response.json();
    console.log(apiResult);
    setDatas(apiResult);
  }

  useEffect(() => serverAPI(), []);

  let hideButton = { border: "solid" };
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row">
          <div class="col col-xl-4 col-lg-4 col-md-4 sidebar">
            <h2>Hacker News Articles</h2>
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
              className="btn btn-outline-primary ml-2 mr-2 mb-2 "
              onClick={() => {
                setCounter(counter + 5);
                setData(articles);
              }}
            >
              More
            </button>
            {/* go five articles back */}
            <button
              className="btn btn-outline-primary ml-2 mr-2 mb-2"
              style={counter < 10 ? { display: "none" } : {}}
              onClick={() => {
                setCounter(counter - 5);
                setData(articles);
              }}
            >
              Back
            </button>
          </div>

          <div class="col col-xl-8 col-lg-8 col-md-8">
            <h2>Comments</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

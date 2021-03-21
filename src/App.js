import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import requests from "./Request";

/* const fetchData = async (callback, api, get) => {
  try {
    const res = await fetch(api + get);
    const json = await res.json();
    console.log(json);  
    
    callback(json); 
  } catch(error) {
    console.log('No fetching possible');
  }
} */

// Start of APP
const App = () => {
  const [articles, setData] = useState([]);

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
    fetchData(3);
  }, []);

  /* useEffect(() => { fetchData(setData, requests.API_URL, requests.fetchTopStories) }, []); */
  console.log("ARTICLES", articles);

  return (
    <div>
      <p>APP</p>
      {articles.map((article) => {
        return (
          <>
            <Main key={article.id} {...article} />
          </>
        );
      })}
      <button
        className="btn btn-outline-primary ml-2 mr-2 mb-2"
        onClick={() =>
          setData((articles) => [...articles, "dfjkljbgvdfkljbgdfkl"])
        }
      >
        More
      </button>
    </div>
  );
};

export default App;

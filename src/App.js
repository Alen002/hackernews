import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main  from './components/Main';
import Footer from './components/Footer';
import requests from './Request';

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
 
  const fetchData = () => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(data => {
      console.log('old', data);
      return data;
    })
    .then(data => {
      return Promise.all(data.filter((e, x) => x < 20).map(id =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(resp => resp.json())
          .then(json => {
            console.log('Articles', json); 
            return json;
          })
      ))
    })
    .then(data => setData(data))
  }

  useEffect(() => { fetchData() }, []);

  /* useEffect(() => { fetchData(setData, requests.API_URL, requests.fetchTopStories) }, []); */
  console.log('ARTICLES', articles);
  
  return (
    <div>
     <p>APP</p>
      {articles.map(article => {   
        return ( 
          <>
           <Main {...article}/>
          </>
        )})
      }
    </div>
  )
}

export default App;


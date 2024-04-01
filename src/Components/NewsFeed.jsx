import {useState, useEffect} from 'react'
import axios from 'axios'

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {

const options = {
  method: 'GET',
  url: `https://crypto-news34.p.rapidapi.com/news/cryptonews`,
  headers: {
    'X-RapidAPI-Key': '6f5bf0432amsh42066096739d5b2p19c3bajsn21b4224763f6',
    'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
  }
};

axios.request(options).then((response) => {
    console.log(response.data)
    setArticles(response.data)

}).catch((error) => {
    console.error(error)
})
    }, [])

console.log(articles)
 
const first7Articles = articles?.slice(0,7)
  return (
    <>
      <div className="news-feed">

        <h2>NewsFeed</h2>
{first7Articles?.map((articles, _index) => (
<div key={_index}>
    <a href={articles.url} ><p>{articles.title}</p></a>
    </div>
    ))}
      </div>
    </>
  );
};

export default NewsFeed
import {useState, useEffect} from 'react'
import { colors } from '@mui/material';
import {Link} from "react-router-dom"

const NewsFeed = () => {
const [articles, setArticles] = useState([])
useEffect(() => {
fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json",{
  method:"GET"
}).then(res=>res.json()).then((data)=>{
  const d=data.articles.reverse()
  setArticles(prev=>[prev,...d])
  localStorage.setItem("articlesData",JSON.stringify(data.articles))
})
}, [])

return (
<>
  <div className="news-feed">
  <h2>News Feed</h2>
  <div className="feed_container">
    {
    articles.map(({publishedAt,author,urlToImage,title})=>{
      return (
      <div 
      key={publishedAt}
      className='feed_article'
      >
        <img src={urlToImage} alt="" />
        <div>
          <Link to={`article#${publishedAt}`}>{title}</Link>
        </div>
      </div>)})}
    </div>
    </div>
  </>
  );
};

export default NewsFeed
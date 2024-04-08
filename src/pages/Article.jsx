import { useEffect,useState } from "react"
import { useLocation } from 'react-router-dom';

function Article() {
  const [txt,settxt]=useState(JSON.parse(localStorage.getItem("articlesData")))
  const [show,setshow]=useState({})
  const location = useLocation();

useEffect(()=>{
    txt.filter((item)=>{
        if(item.publishedAt==location.hash.split("#")[1]){
          setshow(item)
        }
    })     
  },[])
  return (
    <div className="article" >
      <p>{show.author}</p>
      <h1>{show.title}</h1>
      <p>
        description:{show.description}
      </p>
      <p>
        content:{show.content}
      </p>
    </div>
  )
}


export default Article

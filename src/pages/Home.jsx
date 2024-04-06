import NewsFeed from '../Components/NewsFeed'
import CurencyConverter from '../Components/CurencyConverter'
import SearchBar from "../Components/SearchBar" 
import ChartComponent from '../Components/Chart'
/**what happened to your connection? */

function Home() {
  return (
    <div>
    <div className="home">
        <div className="app-wrapper">
           <NewsFeed />
          <CurencyConverter />
        </div>
        <div className="chart_main">
      <ChartComponent/>
        </div>
    </div>
  </div>
      
    
  )
}

export default Home

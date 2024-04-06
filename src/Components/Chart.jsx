import { useEffect ,useState} from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function ChartComponent() {
  const [data,setdata]=useState({})
      useEffect(()=>{
        const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York,%20NY?key=3C3DR7FPTDDTCSHRPTT4VBCZP&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions"
        fetch(url,{
            method:"GET"
        }).then(res=>res.json()).then ((resd)=>{
            const lbl=[]
            const nums=[]
            const feels=[]
            resd.days.map(({temp,datetime,feelslikemin})=>{
                lbl.push(datetime)
                nums.push(temp)
                feels.push(feelslikemin)
            })
            setdata({
                type: 'bar',
                labels:lbl,
                color:"red",
                datasets: [
                    {
                label: 'Temp ',
                data: nums,
                backgroundColor: "lightgreen" },
                 {
                label: 'Feelslike ',
                data: feels,
                backgroundColor: "lightblue",
               }
            ]

            })


        })
    },[])

return (
  data.type?<Bar data={data} 
  options= {{
  scales: {
      y:{
          grid: {
              drawBorder: true,
              color: '#FFFFFF',
          },
          ticks:{
              beginAtZero: true,
              color: 'white',
              fontSize: 16,
          }
      },
      x: {
          grid: {
              drawBorder: true,
              color: '#FFFFFF',
          },
          ticks:{
              beginAtZero: true,
              color: 'white',
              fontSize: 18,
          }
      },
  }
}}
  />:<></>
  )
}

export default ChartComponent

// conditions
// : 
// "Partially cloudy"
// datetime
// : 
// "2024-04-05"
// description
// : 
// "Partly cloudy throughout the day."
// feelslikemin
// : 
// 34.4
// moonphase
// : 
// 0.89
// moonrise
// : 
// "05:04:48"
// moonset
// : 
// "15:45:25"
// sunrise
// : 
// "06:32:08"
// sunset
// : 
// "19:25:41"
// temp
// : 
// 44.4
// tempmin
// : 
// 39.8
// visibility
// : 
// 9.9
// [[Prototype]]

// npm install react-chartjs-2 chart.js
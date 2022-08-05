
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';


function App() {

  const [Data, setData] = useState([])


  let API = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
  const fetchApiMethod = async (url) => {
    try {

      const respones = await fetch(url);
      setData(await respones.json());


    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchApiMethod(API);
  }, [])

  // console.log(Data);

  // let value = Object.values(Data);
  // console.log(value[1]);


  // console.log(entries[1][1])['Time Series (Daily)'][key]['1. open']


  const newData = Data

  const obj

  return (

    <div className='container'>


      <div className='header bg-dark'><h2 className='text-white text-center'>SUMEET YADAV ASSIGNMENT</h2></div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date Time</th>
            <th scope="col">Open</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Close</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )

}

export default App;



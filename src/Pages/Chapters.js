import React,{useState, useEffect} from 'react'
import Cards from '../components/cards/Cards';
import InputEpisode from '../components/filters/tags/InputEpisode';

const Chapters = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([])
  let {air_date, name} = info
  // console.log(info) 
  let url = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(()=>{

    (async function(){
       let data = await fetch(url).then(
        response => response.json()
        )
        setInfo(data)
        let val = await Promise.all(
          data.characters.map((intgr)=>{
             return fetch(intgr).then(
              results => results.json()
             )
          })
        )
        setResults(val)
    })(

    )

  }, [url]);
  return (   
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-4'>
          Episode : {" "}
          <span className='text-success'>
          {name === ""? "Unknown" : name}
          </span>
        </h1>
        <h5 className='text-center'>
          Air Date : {" "}
          <span className='text-warning'>
          { air_date === ""? "Unknown" : air_date}
          </span>
        </h5>
        </div>
        <div className='row'>
          <div className='col-3'>
            <h5 className='text-center mb-4'>Pick Episode</h5>
            <InputEpisode setId = {setId} name = "Episode" total = {51}/>
          </div>
          <div className='col-8'>
            <div className='row'>
            <Cards page="/episodes/" results={results}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Chapters
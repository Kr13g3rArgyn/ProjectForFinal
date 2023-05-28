import React,{useState, useEffect} from 'react'
import Cards from '../components/cards/Cards';
import InputEpisode from '../components/filters/tags/InputEpisode';

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([])
  let {name, type, dimension} = info
  // console.log(info) 
  let url = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(()=>{

    (async function(){
       let data = await fetch(url).then(
        response => response.json()
        )
        setInfo(data)
        let val = await Promise.all(
          data.residents.map((intgr)=>{
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
          Location : {" "}
          <span className='text-success'>
          {name === ""? "Unknown" : name}
          </span>
        </h1>
        <h5 className='text-center'>
          Dimension : {" "}
          <span className='text-warning'>
          { dimension === ""? "Unknown" : dimension}
          </span>
        </h5>

        <h6 className='text-center'>
          Type : {" "}
          <span className='text-warning'>
          { type === ""? "Unknown" : type}
          </span>
        </h6>
        </div>
        <div className='row'>
          <div className='col-3'>
            <h5 className='text-center mb-4'>Pick Location</h5>
            <InputEpisode setId = {setId} name = "Location" total = {126}/>
          </div>
          <div className='col-8'>
            <div className='row'>
            <Cards page="/location/" results={results}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Location
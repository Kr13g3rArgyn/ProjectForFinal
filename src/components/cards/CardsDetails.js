import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardsDetails = () => {
    let {id} = useParams() 
    let [fetchedData, updateFetchedData] = useState([])
    let {name, image, location, origin, gender, species, status, type} = fetchedData
    // console.log(fetchedData) Proverka i vyvod
    let url = `https://rickandmortyapi.com/api/character/${id}` 
    useEffect(() =>{
        (async function (){
            let data = await fetch(url).then((res)=> res.json())
        updateFetchedData(data)
        })()
    }, [url])
  return ( 
    <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-column gap-3'>
            <h1 className='text-center'>
                {name}
            </h1>
            <img src={image} className='img-fluid '></img>

            {(() => {
            if(status === "Dead fs-5"){
                return(
                <div className ="badge bg-danger">
                    {status}
              </div>
                );
            }
            else if(status === "Alive"){
                return(
                    <div className="badge bg-success fs-5">
                        {status}
                </div>
                );
            }
            else{
                return(
                    <div className="badge bg-warning fs-5">
                    {status}
              </div>
                )
            }
          })()}
            <div className='content'>
                <div className=''>
                    <span className='fw-bold'>Sex: </span>
                    <span className=''>{gender}</span>
                </div>

                <div className=''>
                    <span className='fw-bold'>Species: </span>
                    <span className=''>{species}</span>
                </div>
                <div className=''>
                    <span className='fw-bold'>Type: </span>
                    <span className=''>{type === "" ? "Unknown": type}</span>
                </div>
                <div className=''>
                    <span className='fw-bold'>Origin: </span>
                    <span className=''>{origin?.name}</span>
                </div>
                <div className=''>
                    <span className='fw-bold'>Location: </span>
                    <span className=''>{location?.name}</span>
                </div>
            </div>


        </div>
    </div>
  )
}

export default CardsDetails
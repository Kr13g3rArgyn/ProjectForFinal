import React from 'react'
import Sex from './tags/Sex';
import Species from './tags/Species';
import Status from './tags/Status';

export const Filters = ({setStatus, setPageNum, setGender, setSpecies}) => {
    let clear = ()=> {
        //Obnovit' filtr
        setStatus("")
         setPageNum("")
          setGender("")
           setSpecies(" ")
           window.location.reload(false)
    }
    return (<div className='col-3'>
        <div className='fw-bold fs-3 text-center mb-3'>
            Filters
        </div>

        <div
        onClick={clear}
        style={{cursor : "pointer"}} 
        className='text-center text-decoration-underline fs-6 text-primary'>
            Clear
        </div>

{/* ACCORDION BOOTSTRAP */}
<div className="accordion" id="accordionExample">
<Status setPageNum={setPageNum} setStatus={setStatus}/>
<Sex setPageNum={setPageNum} setGender={setGender}/>
<Species setSpecies = {setSpecies} setPageNum={setPageNum}/>


</div>
{/* ACCORDION BOOTSTRAP ENDS*/}


    </div>
    )
}
export default Filters;
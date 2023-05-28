import React from 'react'
import FilterButtons from './FilterButtons'

const Sex = ({setPageNum, setGender}) => {
    let gender = ["male", "female", "genderless", "unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#collapseThree" 
      aria-expanded="false" 
      aria-controls="collapseThree">
        Gender
      </button>
    </h2>
    <div id="collapseThree" 
    className="accordion-collapse collapse"
    aria-labelledby='headingThree' 
    data-bs-parent="#accordionExample">

      <div className="accordion-body d-flex flex-wrap gap-4">
        {gender.map((items,i)=>(
                <FilterButtons 
                task={setGender}
                setPageNum={setPageNum}
                key = {i}
                name = "gender"
                index = {i}
                items={items}
                // setPageNum={setPageNum}
                // task={setPageNum}
                // input={items}
            />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Sex
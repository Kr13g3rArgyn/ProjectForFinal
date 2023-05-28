import React from 'react'
import FilterButtons from './FilterButtons'
const Status = ({setStatus, setPageNum}) => {
    let status = ["Unknown", "Alive" ,"Dead"]
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button type="button" 
            className="accordion-button " 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" 
            aria-expanded="true" 
            aria-controls="collapseThree">
                Status
            </button>
        </h2>

        <div id="collapseThree" 
            className="accordion-collapse collapse show" 
            data-bs-parent='#accordionExample'
            aria-labelledby='headingThree'>
            <div className="accordion-body d-flex flex-wrap gap-3">
                {status.map((items, i) =>(
                    <FilterButtons
                    // task={() => setStatus (items)} 
                        task={setStatus} // Pass setStatus as a function
                        setPageNum={setPageNum}
                        name="status"
                        key={i}
                        index={i}
                        items={items}
                        />

                ))}
            </div>
         </div>
  </div>
  )
}

export default Status
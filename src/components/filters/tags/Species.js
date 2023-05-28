import React from 'react';
import FilterButtons from './FilterButtons';

const Species = ({ setPageNum,setSpecies }) => {
  let species = ['Human',
   'Alien', 'Humanoid',
    'Unknown', 'Animal', 
    'Disease', 'Robot',
     'Cronenberg', 'Planet',
      'Mythologycal', 'Poopybutthole'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, i) => (
            <FilterButtons
            name="species"  
            task={setSpecies}  // Make sure setSpecies is a function
              setPageNum={setPageNum}
            
              key={i}
              index={i}
              items={item}
            />

          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;

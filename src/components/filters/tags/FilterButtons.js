import React from 'react';

const FilterButtons = ({ name, index, items, task, setPageNum }) => {
  return (
    <div>
      <style jsx>{`
        .x:checked + label {
          background-color: blue;
          color: white;
        }
        input[type='radio'] {
          visibility: hidden;
        }
      `}</style>

      
      <div className="form-check">
        <input
          onClick={() => {
            setPageNum(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={`${name}`}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButtons;

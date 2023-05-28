import React from 'react';
import styles from './Search.module.css';

const Search = ({setSearch, setPageNum}) => {
  return (
    <form className='container d-flex justify-content-center gap-3 my-5'>
      <input onChange={(element)=>{
        
        setPageNum(1);
        setSearch(element.target.value)
      }} 
      
      type='text' className={styles.input} placeholder='Rick Sanchez..'
       />
      <button onClick={element =>{
        element.preventDefault();
      }} className={`${styles.btn} btn btn-primary`}>
        <i className='material-icons'>search</i>
      </button> 
    </form>
  );
};

export default Search;

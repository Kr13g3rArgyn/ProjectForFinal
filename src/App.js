import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from './components/filters/Filters';
import Cards from './components/cards/Cards';
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Location from './Pages/Location';
import Chapters from './Pages/Chapters';
import CardsDetails from './components/cards/CardsDetails';
function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/:id" element= {<CardsDetails />}/>

        <Route path="/episodes" element= {<Chapters />}/>        <Route path="/:id" element= {<CardsDetails />}/>
        <Route path="/episodes/:id" element= {<CardsDetails />}/>

        <Route path="/location" element= {<Location />}/>
        <Route path="/location/:id" element= {<CardsDetails />}/>

      </Routes>


    </Router>
    
  )
}
const Home= () => {
  let [pageNum, setPageNum] = useState(1);
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState(" ")

  let [fetchData, updateFetchData] =useState([]);
  let {info, results} = fetchData;


  let url = `https://rickandmortyapi.com/api/character/?page=
  ${pageNum}&name=${search}&status=${status}
  &gender=${gender}&species=${species}`;

//IIFE code starts
  useEffect(() => {
  (async function(){
    let data = await fetch(url).then(response=>response.json())
    updateFetchData(data)
  })()
  //IIFE code ends

  }, [url])

  return (

    <div className="App">
    {/* NAVBAR */}
    <h1 className='text-center mb-4'>Characters</h1>

{/* SEARCH BAR */}

    <Search setSearch ={setSearch} setPageNum={setPageNum}/>

{/* SEARCH BAR ENDS */}


      {/* CONTAINER OF CONTENT */}
      <div className='container'>
         <div className='row'>
            <Filters 
            setStatus = {setStatus}
             setGender = {setGender}
              setPageNum = {setPageNum}
               setSpecies = {setSpecies}/>
          <div className='col-8'>
            <div className='row'>
              <Cards page="/" results={results}/>
              </div>
            </div>
         </div>
      </div>
      {/* CONTAINER OF CONTENT ENDS */}


      {/* PAGINATION */}
    <Pagination
    info = {info}
    pageNum = {pageNum}
    setPageNum={setPageNum} 
/>
    </div>
  );
}

export default App;
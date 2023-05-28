import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 ">

      <div className="container-fluid">
        
        <h1 className='fs-3 ubuntu navbar-brand'>
        <Link to = "/"className='title_name text-decoration-none'>
          <span className='text-success'>Rick </span>
          and
          <span className='text-primary'> Morty</span>
          </Link>
        </h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-4 m">
            <NavLink activeClassName="active" to="/" className="nav-link active" 
            aria-current="page">
              Characters</NavLink>
            <NavLink to="/location" className="nav-link">Location</NavLink>
            <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
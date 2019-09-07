import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ( { charactersCurrentPage, locationsCurrentPage, episodesCurrentPage } ) => {
    return (
        <div className="nav">
           <Link className='item' to={`/characters/page-${charactersCurrentPage}`}>characters</Link>
           <Link className='item' to={`/locations/page-${locationsCurrentPage}`}>locations</Link>
           <Link className='item' to={`/episodes/page-${episodesCurrentPage}`}>episodes</Link>
        </div>
    )
}

export default Navigation

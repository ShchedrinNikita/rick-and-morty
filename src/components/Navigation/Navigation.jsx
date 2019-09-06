import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ( { charactersCurrentPage, locationsCurrentPage, episodesCurrentPage } ) => {
    return (
        <div>
           <Link to={`/characters/page-${charactersCurrentPage}`}>characters</Link>
           <Link to={`/locations/page-${locationsCurrentPage}`}>locations</Link>
           <Link to={`/episodes/page-${episodesCurrentPage}`}>episodes</Link>
        </div>
    )
}

export default Navigation

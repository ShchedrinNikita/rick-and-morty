import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ( { charactersCurrentPage, locationsCurrentPage, episodesCurrentPage, match } ) => {
    console.log(match.params.currentType) //не прилетает мэтч
    return (
        <div className="nav">
           <Link className={ match.params.currentType === 'characters' ? 'item selected' : 'item 1'} to={`/characters/page-${charactersCurrentPage}`}>characters</Link>
           <Link className='item' to={`/locations/page-${locationsCurrentPage}`}>locations</Link>
           <Link className='item' to={`/episodes/page-${episodesCurrentPage}`}>episodes</Link>
        </div>
    )
}

export default withRouter(Navigation)

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ( { charactersCurrentPage, locationsCurrentPage, episodesCurrentPage, setStateCurrentType, currentType } ) => {
    return (
        <div className="nav">
           <Link className={ currentType === 'characters' ? 'item selected' : 'item' } to={`/characters/page-${charactersCurrentPage}`} onClick={() => {setStateCurrentType('characters')}}>characters</Link>
           <Link className={ currentType === 'locations' ? 'item selected' : 'item' } to={`/locations/page-${locationsCurrentPage}`} onClick={() => {setStateCurrentType('locations')}}>locations</Link>
           <Link className={ currentType === 'episodes' ? 'item selected' : 'item' } to={`/episodes/page-${episodesCurrentPage}`} onClick={() => {setStateCurrentType('episodes')}}>episodes</Link>
        </div>
    )
}

export default withRouter(Navigation)

import React from 'react'
import Card from './Card/Card'
import './CardSet.scss'
import { withRouter } from 'react-router-dom'

const CardSet = ({ set, match }) => {
    return (
        <div className="card-set">
            { set.map(el => <Card match={match} element={el} key={el.id} />)}
        </div>
    )
}

export default withRouter(CardSet)

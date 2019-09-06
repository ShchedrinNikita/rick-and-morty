import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Pagination = ({ pageCount, match, history }) => {
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(<Link to={`/${match.params.currentType}/page-${i}`}>{i}</Link>)
    }

    const swipePage = (direction) => {
        if (direction === 'next' && pageCount !== +match.params.currentPage) {
            history.push(`/${match.params.currentType}/page-${+match.params.currentPage+1}`)
        } 
        if (direction === 'prev' && 1 !== +match.params.currentPage) {
            history.push(`/${match.params.currentType}/page-${+match.params.currentPage-1}`)
        }
    }
    return (
        <div>
            <div className="prev-btn" onClick={() => swipePage('prev')}>prev</div>
            {pages}
            <div className="next-btn" onClick={() => swipePage('next')}>next</div>
        </div>
    )
}

export default withRouter(Pagination)

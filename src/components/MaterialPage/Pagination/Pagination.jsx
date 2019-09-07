import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Pagination.scss'

const Pagination = ({ pageCount, match, history }) => {
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(<Link className={ i === +match.params.currentPage ? "page-number active" : "page-number"} to={`/${match.params.currentType}/page-${i}`} key={i}>{i}</Link>)
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
        <div className="pagination">
            <div className={ 1 !== +match.params.currentPage ? "arrow active" : "arrow"} onClick={() => swipePage('prev')}><i className="fas fa-chevron-left"></i></div>
            {pages}
            <div className={ pageCount !== +match.params.currentPage ? "arrow active" : "arrow" } onClick={() => swipePage('next')}><i className="fas fa-chevron-right"></i></div>
        </div>
    )
}

export default withRouter(Pagination)

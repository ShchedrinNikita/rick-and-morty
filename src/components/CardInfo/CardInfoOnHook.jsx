import React, { Component, useState, useEffect, useRef } from 'react'
import axios from 'axios';
import './CardInfo.scss'

const CardInfoOnHook = ({ cardInfo: propsCardInfo, match }) => {
    const [cardInfo, setCardInfo] = useState({})
    
    useEffect(() => {
        if(!cardInfo) {
            loadData()
        } else if (cardInfo) {
            setCardInfo(propsCardInfo)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const prevProps = usePrevious({ match });

    useEffect(() => {
        if((prevProps.match.params.currentType !== match.params.currentType && cardInfo) || prevProps.match.params.currentId !== match.params.currentId) {
            this.loadData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match, cardInfo])

    const loadData = async() => {
        const results = await axios.get(`https://rickandmortyapi.com/api/${match.params.currentType.slice(0, -1)}/${match.params.currentId}`)
        setCardInfo(results.data)
    }

    
    if(!cardInfo) return null

    return (
        <div className="card-info">
            <div className="info">
                <div className="name">{cardInfo.name}</div>
                <div className="id">ID:{cardInfo.id}</div>
                { cardInfo.status ? <div className="status">Status: {cardInfo.status}</div> : null}
                { cardInfo.type ? <div className="type">Type: {cardInfo.type}</div> : null }
                { cardInfo.gender ? <div className="gender">Gender: {cardInfo.gender}</div> : null }
                { cardInfo.location ? <div className="location">Location: {cardInfo.location.name}</div> : null }
                { cardInfo.dimension ? <div className="dimension">Dimension: {cardInfo.dimension}</div> : null }
                { cardInfo.residents ? <div className="residents">Residents: {cardInfo.residents.length}</div> : null }
                { cardInfo.species ? <div className="species">Species: {cardInfo.species}</div> : null} 
                { cardInfo.origin ? <div className="origin">Origin: {cardInfo.origin.name}</div> : null}
                { cardInfo.air_date ? <div className="relise-date">Relise date: {cardInfo.air_date}</div> : null}
            </div>
            { cardInfo.image ? <div className="image"><img src={cardInfo.image} alt=""/></div> : null}
        </div>
    )

}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
    ref.current = value;
    });
    return ref.current;
    }

export default CardInfoOnHook


// import React from 'react'
// import './CardInfo.scss'
// import { withRouter } from 'react-router-dom'

// const CardInfo = ({ cardInfo }) => {
    
//     return (
//         <div className="card-info">
//             <div className="info">
//                 <div className="name">{cardInfo.name}</div>
//                 <div className="id">ID:{cardInfo.id}</div>
//                 { cardInfo.status ? <div className="status">Status: {cardInfo.status}</div> : null}
//                 { cardInfo.type ? <div className="type">Type: {cardInfo.type}</div> : null }
//                 { cardInfo.gender ? <div className="gender">Gender: {cardInfo.gender}</div> : null }
//                 { cardInfo.location ? <div className="location">Location: {cardInfo.location.name}</div> : null }
//                 { cardInfo.dimension ? <div className="dimension">Dimension: {cardInfo.dimension}</div> : null }
//                 { cardInfo.residents ? <div className="residents">Residents: {cardInfo.residents.length}</div> : null }
//                 { cardInfo.species ? <div className="species">Species: {cardInfo.species}</div> : null} 
//                 { cardInfo.origin ? <div className="origin">Origin: {cardInfo.origin.name}</div> : null}
//                 { cardInfo.air_date ? <div className="relise-date">Relise date: {cardInfo.air_date}</div> : null}
//             </div>
//             { cardInfo.image ? <div className="image"><img src={cardInfo.image} alt=""/></div> : null}
//         </div>
//     )
// }

// export default withRouter(CardInfo)


// import React, { Component } from 'react'
// import Axios from 'axios';
// import './CardInfo.scss'

// export default class CardInfo extends Component {
    
//     componentDidMount() {
//         if(!this.props.cardInfo.data) {
//             this.loadData()
//         }
//     }
    
//     componentDidUpdate(prevProps) {
//         if((prevProps.match.params.currentId !== this.props.match.params.currentId && !this.props.cardInfo) || prevProps.match.params.currentId !== this.props.match.params.currentId) {
//             this.loadData()
//         }
//     }

//     async loadData() {
//         const results = await Axios.get(`https://rickandmortyapi.com/api/${this.props.match.params.currentType.slice(0, -1)}/${this.props.match.params.currentId}`)
//         this.props.setStateData('cardInfo' , { 
//             data: results.data
//         })
//     }

//     render() {
        

//         return (
//             <div className="card-info">
//                 <div className="info">
//                     <div className="name">{this.props.cardInfo.name}</div>
//                     <div className="id">ID:{this.props.cardInfo.id}</div>
//                     { this.props.cardInfo.status ? <div className="status">Status: {this.props.cardInfo.status}</div> : null}
//                     { this.props.cardInfo.type ? <div className="type">Type: {this.props.cardInfo.type}</div> : null }
//                     { this.props.cardInfo.gender ? <div className="gender">Gender: {this.props.cardInfo.gender}</div> : null }
//                     { this.props.cardInfo.location ? <div className="location">Location: {this.props.cardInfo.location.name}</div> : null }
//                     { this.props.cardInfo.dimension ? <div className="dimension">Dimension: {this.props.cardInfo.dimension}</div> : null }
//                     { this.props.cardInfo.residents ? <div className="residents">Residents: {this.props.cardInfo.residents.length}</div> : null }
//                     { this.props.cardInfo.species ? <div className="species">Species: {this.props.cardInfo.species}</div> : null} 
//                     { this.props.cardInfo.origin ? <div className="origin">Origin: {this.props.cardInfo.origin.name}</div> : null}
//                     { this.props.cardInfo.air_date ? <div className="relise-date">Relise date: {this.props.cardInfo.air_date}</div> : null}
//                 </div>
//                 { this.props.cardInfo.image ? <div className="image"><img src={this.props.cardInfo.image} alt=""/></div> : null}
//             </div>
//         )
//     }
// }


import React from 'react'
import './CardInfo.scss'
import { withRouter } from 'react-router-dom'

const CardInfo = ({ cardInfo }) => {
    
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

export default withRouter(CardInfo)


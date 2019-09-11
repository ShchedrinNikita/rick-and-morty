import React, { Component } from 'react'
import axios from 'axios';
import './CardInfo.scss'

export default class CardInfo extends Component {
    
    state = {
        cardInfo: {}
    }

    componentDidMount() {
        if(!this.props.cardInfo) {
            this.loadData()
        } else if (this.props.cardInfo) {
            this.setState({
                cardInfo: this.props.cardInfo
            })
        }
    }
    
    componentDidUpdate(prevProps) {
        if((prevProps.match.params.currentType !== this.props.match.params.currentType && !this.state.cardInfo) || prevProps.match.params.currentId !== this.props.match.params.currentId) {
            this.loadData()
        }
    }

    async loadData() {
        const results = await axios.get(`https://rickandmortyapi.com/api/${this.props.match.params.currentType.slice(0, -1)}/${this.props.match.params.currentId}`)
        this.setState({
            cardInfo: results.data
        })
    }

    render() {
        if(!this.state.cardInfo) return null

        return (
            <div className="card-info">
                <div className="info">
                    <div className="name">{this.state.cardInfo.name}</div>
                    <div className="id">ID:{this.state.cardInfo.id}</div>
                    { this.state.cardInfo.status ? <div className="status">Status: {this.state.cardInfo.status}</div> : null}
                    { this.state.cardInfo.type ? <div className="type">Type: {this.state.cardInfo.type}</div> : null }
                    { this.state.cardInfo.gender ? <div className="gender">Gender: {this.state.cardInfo.gender}</div> : null }
                    { this.state.cardInfo.location ? <div className="location">Location: {this.state.cardInfo.location.name}</div> : null }
                    { this.state.cardInfo.dimension ? <div className="dimension">Dimension: {this.state.cardInfo.dimension}</div> : null }
                    { this.state.cardInfo.residents ? <div className="residents">Residents: {this.state.cardInfo.residents.length}</div> : null }
                    { this.state.cardInfo.species ? <div className="species">Species: {this.state.cardInfo.species}</div> : null} 
                    { this.state.cardInfo.origin ? <div className="origin">Origin: {this.state.cardInfo.origin.name}</div> : null}
                    { this.state.cardInfo.air_date ? <div className="relise-date">Relise date: {this.state.cardInfo.air_date}</div> : null}
                </div>
                { this.state.cardInfo.image ? <div className="image"><img src={this.state.cardInfo.image} alt=""/></div> : null}
            </div>
        )
    }
}


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


import React, { Component } from 'react'
import Axios from 'axios';

export default class CardInfo extends Component {
    
    componentDidMount() {
        if(!this.props.cardInfo.data) {
            this.loadData()
        }
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.currentId !== this.props.match.params.currentId && !this.props.cardInfo || prevProps.match.params.currentId !== this.props.match.params.currentId) {
            this.loadData()
        }
    }

    async loadData() {
        const results = await Axios.get(`https://rickandmortyapi.com/api/${this.props.match.params.currentType.slice(0, -1)}/${this.props.match.params.currentId}`)
        this.props.setStateData('cardInfo' , { 
            data: results.data
        })
    }

    render() {
        

        return (
            <div>
                { this.props.cardInfo.image ? <div className="image"><img src={this.props.cardInfo.image} alt=""/></div> : null}
                <div className="info">
                    <div className="name">{this.props.cardInfo.name}</div>
                    <div className="id">ID:{this.props.cardInfo.id}</div>
                    { this.props.cardInfo.type & this.props.cardInfo.dimension  ? <div className="type">{this.props.cardInfo.type}</div> : null }
                    { this.props.cardInfo.dimension ? <div className="dimension">{this.props.cardInfo.dimension}</div> : null }
                    { this.props.cardInfo.residents ? <div className="residents">Residents: {this.props.cardInfo.residents.length}</div> : null }
                    { this.props.cardInfo.species ? <div className="species">{this.props.cardInfo.species}</div> : null} 
                    { this.props.cardInfo.origin ? <div className="origin">{this.props.cardInfo.origin.name}</div> : null}
                    { this.props.cardInfo.status ? <div className="status">{this.props.cardInfo.status}</div> : null}
                    { this.props.cardInfo.air_date ? <div className="relise-date">Relise date: {this.props.cardInfo.air_date}</div> : null}
                </div>
            </div>
        )
    }
}


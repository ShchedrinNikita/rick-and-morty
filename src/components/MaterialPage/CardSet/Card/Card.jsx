import React, { Component } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'


export default class Card extends Component {
    render() {
        return (
            <Link to={ `/${this.props.match.params.currentType}/id-${this.props.element.id}` } className='card'>
                { this.props.element.image ? <div className="image"><img src={this.props.element.image} alt=""/></div> : null}
                <div className="info">
                    <div className="name">{this.props.element.name}</div>
                    <div className="id">ID:{this.props.element.id}</div>
                    {/* { this.props.element.type & this.props.element.dimension  ? <div className="type">{this.props.element.type}</div> : null } */}
                    {/* { this.props.element.dimension ? <div className="dimension">{this.props.element.dimension}</div> : null } */}
                    { this.props.element.residents ? <div className="residents">Residents: {this.props.element.residents.length}</div> : null }
                    {/* { this.props.element.species ? <div className="species">{this.props.element.species}</div> : null}  */}
                    {/* { this.props.element.origin ? <div className="origin">{this.props.element.origin.name}</div> : null} */}
                    { this.props.element.status ? <div className="status">{this.props.element.status}</div> : null}
                    { this.props.element.air_date ? <div className="relise-date">Relise date: {this.props.element.air_date}</div> : null}
                </div>
            </Link>
        )
    }
}

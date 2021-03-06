import React, { Component } from 'react'
import CardSet from './CardSet/CardSet'
import axios from 'axios'
import Pagination from './Pagination/Pagination'
import './MaterialPage.scss'

export default class MaterialPage extends Component {

    componentDidMount() {
        if(!this.props[this.props.match.params.currentType].results) {
            this.loadData()
        }
    }
    
    componentDidUpdate(prevProps) {
        if((prevProps.match.params.currentType !== this.props.match.params.currentType && !this.props[this.props.match.params.currentType].results) || prevProps.match.params.currentPage !== this.props.match.params.currentPage) {
            this.loadData()
        }
    }
    
    async loadData() {
        const results = await axios.get(`https://rickandmortyapi.com/api/${this.props.match.params.currentType.slice(0, -1)}/?page=${this.props.match.params.currentPage}`)
        this.props.setStateData(this.props.match.params.currentType , { 
            data: results.data,
            currentPage: this.props.match.params.currentPage
        })
        this.props.setStateCurrentType(this.props.match.params.currentType)
    }
    render() {
        if(!this.props[this.props.match.params.currentType].results) return null 
        return (
            <div className='material-page'>
                <Pagination pageCount={ this.props[this.props.match.params.currentType].info.pages}/>
                <CardSet set={ this.props[this.props.match.params.currentType].results}/> 
            </div>
        )
    }
}

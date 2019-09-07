import React, { Component } from 'react'
import CardSet from './CardSet/CardSet'
import axios from 'axios'
// import Card from './CardSet/Card/Card'
import Pagination from './Pagination/Pagination'
import './MaterialPage.scss'


export default class MaterialPage extends Component {

    componentDidMount() {
        if(!this.props[this.props.match.params.currentType].data) {
            this.loadData()
        }
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.currentType !== this.props.match.params.currentType && !this.props[this.props.match.params.currentType].data || prevProps.match.params.currentPage !== this.props.match.params.currentPage) {
            this.loadData()
        }
    }
    
    async loadData() {
        const results = await axios.get(`https://rickandmortyapi.com/api/${this.props.match.params.currentType.slice(0, -1)}/?page=${this.props.match.params.currentPage}`)
        this.props.setStateData(this.props.match.params.currentType , { 
            data: results,
            currentPage: this.props.match.params.currentPage
        })
        const char = await axios.get('https://rickandmortyapi.com/api/character/61')
        console.log(char, results)  
    }
    render() {
        if(!this.props[this.props.match.params.currentType].data) return null 
        return (
            <div className='material-page'>
                <Pagination pageCount={ this.props[this.props.match.params.currentType].data.info.pages}/>
                <CardSet set={ this.props[this.props.match.params.currentType].data.results}/> 
               {/* <div className="card-set">{ this.props[this.props.match.params.currentType].data.results.map(el => <Card  element={el} key={el.id} />)}</div> */}
            </div>
        )
    }
}

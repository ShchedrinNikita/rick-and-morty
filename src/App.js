import React, { Component } from 'react'
import './App.css';
import MaterialPage from'./components/MaterialPage/MaterialPage'
import Navigation from './components/Navigation/Navigation'
import CardInfo from './components/CardInfo/CardInfo'
import { Switch, Route, Redirect } from 'react-router-dom'

export default class App extends Component {

  state = {
    characters: {
      data: {},
      currentPage: 1
    },
    locations: {
      data: {},
      currentPage: 1
    },
    episodes: {
      data: {},
      currentPage: 1
    },
    cardInfo: {
      data: {}
    },
    currentType: ''
  }
 

  setStateData = (type, data) => {
    this.setState({[type]: data})
  }

  setStateCurrentType = (currentType) => {
    this.setState({currentType})
  }

  render() {
    return (
      <div className="App">
        <Navigation currentType={ this.state.currentType } charactersCurrentPage={ this.state.characters.currentPage } locationsCurrentPage={ this.state.locations.currentPage } episodesCurrentPage={ this.state.episodes.currentPage } setStateCurrentType={this.setStateCurrentType}/>
        <Switch>
          <Route path='/:currentType/page-:currentPage' exact render={(props) => <MaterialPage {...props} characters={this.state.characters.data} locations={this.state.locations.data} episodes={this.state.episodes.data} setStateData={this.setStateData} setStateCurrentType={this.setStateCurrentType}/>}/>
          {/* <Route path='/:currentType/id-:currentId' exact render={(props) => <CardInfo {...props} cardInfo={this.state.cardInfo.data} setStateData={this.setStateData}/>}/> */}
          <Route path='/:currentType/id-:currentId' exact render={(props) => {
            if ( this.state[props.match.params.currentType].data.results.find(el => el.id === +props.match.params.currentId) ) {
              return <CardInfo cardInfo={this.state[props.match.params.currentType].data.results.find(el => el.id === +props.match.params.currentId)}/>
            } else return null
            }
          }/>
          <Redirect from='/:currentType' to='/:currentType/page-1' exact/>
          <Redirect from='/' to='/characters/page-1' />
        </Switch>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './App.css';
import MaterialPage from'./components/MaterialPage/MaterialPage'
import Navigation from './components/Navigation/Navigation'
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
  }

  setStateData = (type, data) => {
    this.setState({[type]: data})
  }

  render() {
    return (
      <div className="App">
        <Navigation charactersCurrentPage={ this.state.characters.currentPage } locationsCurrentPage={ this.state.locations.currentPage } episodesCurrentPage={ this.state.episodes.currentPage }/>
        <Switch>
          <Route path='/:currentType/page-:currentPage' exact render={(props) => <MaterialPage {...props} characters={this.state.characters.data} locations={this.state.locations.data} episodes={this.state.episodes.data} setStateData={this.setStateData}/>}/>
          
          <Redirect from='/:currentType' to='/:currentType/page-1'/>
          <Redirect from='/' to='/characters/page-1'/>
        </Switch>
      </div>
    )
  }
}

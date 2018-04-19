import React, {Component} from 'react'
import {ConnectedRouter} from 'react-router-redux'
import history from './history'
import Routes from './Routes'
// import UploadImage from './containers/UploadImage'
import Header from './components/Header'
import ShowImages from './containers/ShowImages';

class App extends Component {
  render () {
    return (<ConnectedRouter history={history}>
      <div>
        <Header />
        <ShowImages />
        <Routes />
      </div>
    </ConnectedRouter>)
  }
}

export default App

import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './configureStore'
import {PersistGate} from 'redux-persist/integration/react'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const appStore = configureStore()

const app = (<Provider store={appStore.store}>
  <PersistGate loading={null} persistor={appStore.persistor}>
    <App />
  </PersistGate>
</Provider>)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()

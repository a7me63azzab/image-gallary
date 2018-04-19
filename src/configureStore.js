import {createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import history from './history'
import rootReducer from './store/reducers/index'

const middleware = routerMiddleware(history)

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {

  const store = createStore(persistedReducer, applyMiddleware(middleware, thunk))
  const persistor = persistStore(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // This fetch the new state of the above reducers.
    module.hot.accept('./store/reducers', () => {
      const nextRootReducer = require('./store/reducers/index')
      store.replaceReducer(
            persistReducer(persistConfig, nextRootReducer)
          )
    })
  }

  const appStore = {
    store:store,
    persistor:persistor
  }


  return appStore
}

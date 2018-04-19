import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as notificationsReducer} from 'reapop'
import uploadImageReducer from './Upload'
import showImagesReducer from './showImages'

const rootReducer = combineReducers({
  router: routerReducer,
  uploadImage:uploadImageReducer,
  showImages:showImagesReducer,
  notifications: notificationsReducer()
})
export default rootReducer

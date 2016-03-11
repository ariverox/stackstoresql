import {combineReducers} from 'redux'
import items from './items'
import user from './user'
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
  items,
  user,
  form: formReducer
})


import {FETCH_ITEM} from '../constants'

const INITIAL_STATE = {
  all:['what', 'dasda', 'adsdad','dasfga'],
  currentItem: {}
}

export default function (state=INITIAL_STATE, action){

  switch(action.type){
    case FETCH_ITEM:
    return state

    default:
    return state
  }

}

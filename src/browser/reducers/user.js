
import {SESSION} from '../constants'
const INITIAL_STATE = {
  user:{

  }
}

export default function (state=INITIAL_STATE, action){

  switch(action.type){
    case 'LOGIN':
    return state
    case 'REGISTER':
    return state
    default:
    return state

  }

}

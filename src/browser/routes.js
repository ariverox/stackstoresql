import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/app';
import Index from './components/Index.js'
import Items from './components/Items/Items'
import LogIn from './components/LogIn'
import Register from './components/Register'


class blah extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div> blah</div>
    )
  }
}




export default (
  <Route path="/" component={App} >
    <IndexRoute component={Index} />
    <Route component={Items} />
    <Route path="login" component={LogIn} />
    <Route path="register" component={Register} />

  </Route>

)

import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {register} from '../actions/';
import {Link} from 'react-router'



class Register extends React.Component {
  onSubmit(props){
    console.log('props', props)
    this.props.register(props)
    .then((what) =>{
      console.log('what',what)
      // this.context.router.push('/')
      console.log('blog post ahs been created')
    }).catch(function(e){
      console.log(e)
    })

  }

  render () {
    const {fields:{username, password},handleSubmit} = this.props

    return (

      <div>
        <form  onSubmit={handleSubmit(this.onSubmit.bind(this))}className="form-group">
          <h3> Register mate</h3>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" type="text" {...username}/>

          </div>
          <div className="form-group">
            <label> Password</label>
            <input className="form-control" type="text" {...password}/>

          </div>
          <div>
            <button type="submit" className="register-button btn btn-primary"> Register</button>
          </div>
        </form>
      </div>
    )
  }
}

function validate(values){
  const  errors = {};


  return errors;





}


export default reduxForm({
  form: 'RegisterForm',
  fields: ['username', 'password'],
  validate
}, null, {register})(Register)

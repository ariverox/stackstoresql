import React, {PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {logIn} from '../actions/index';
import {Link} from 'react-router'


class LogIn extends React.Component {


  onSubmit(props){


  }
  render () {
    const {fields:{username, password},handleSubmit} = this.props

    return (

      <div>
        <form  onSubmit={handleSubmit(this.onSubmit.bind(this))}className="form-group">
          <h3> Log In mate</h3>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" type="text" {...username}/>

          </div>
          <div className="form-group">
            <label> Password</label>
            <input className="form-control" type="text" {...password}/>

          </div>
          <button type="submit" className="btn btn-success" >
            Login mater
          </button>
        </form>
      </div>
    )
  }
}


function validate(valus){
  const errors ={}

  return errors

}


export default reduxForm({
  form: 'LogIn',
  fields: ['username', 'password'],
  validate
}, null, {logIn})(LogIn)

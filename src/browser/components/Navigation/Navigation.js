import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'


class Navigation extends React.Component {


  static contextTypes  = {
    router:PropTypes.object
  }

  componentWillMount(){

  }


  renderLogin() {
    return (
      <button >
        <img src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_small.png"/>
      </button>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav navbar-nav">
          <li className={`nav-item`}>
            <Link to="/register">
              <span> Regiser</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <span>Login</span>

            </Link>          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <form className="form-inline pull-xs-right">
          {this.renderLogin()}
        </form>
      </nav>
    )
  }
}

export default Navigation;

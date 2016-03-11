import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../../actions'

class Items extends React.Component {

  componentWillMount (){

  }
  render () {
    return (
      <div> lol</div>
    )

  }
}


function mapStateToProps(state){
  return {
    items: state.items.all

  }
}

export default Items;

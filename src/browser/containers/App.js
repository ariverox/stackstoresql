import React, {
  PropTypes
} from 'react'

import Navigation from '../components/Navigation/Navigation'

class App extends React.Component {
  render() {

    return (
      <div>
        <Navigation />
   < div > {this.props.children} < /div>
      </div>
    )

  }
}




export default App;

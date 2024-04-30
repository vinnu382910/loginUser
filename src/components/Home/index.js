// Write your code here

import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogedIn: true}

  onClickButton = () => {
    this.setState(prevState => ({isLogedIn: !prevState.isLogedIn}))
  }

  render() {
    const {isLogedIn} = this.state
    return (
      <div className="main-cont">
        <div className="cont">
          <Message isLogedIn={isLogedIn} />
          {isLogedIn ? (
            <Login login={this.onClickButton} />
          ) : (
            <Logout logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home

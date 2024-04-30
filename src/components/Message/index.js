// Write your code here

import './index.css'

const Message = props => {
  const {isLogedIn} = props
  const message = isLogedIn ? 'Please Login' : 'Welcome User'
  return <h1 className="message">{message}</h1>
}

export default Message

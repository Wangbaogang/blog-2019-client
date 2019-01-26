import * as React from 'react'
import Header from '../../modules/header'
import Login from '../../modules/login'

class Admin extends React.Component {
  render() {
    return (
      <div className="admin">
        <Header />
        <Login />
      </div>
    )
  }
} 

export default Admin
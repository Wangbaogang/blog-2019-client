import * as React from 'react'
import Header from '../../modules/header'
import Login from '../../modules/login'
import Write from '../../modules/write'

class Admin extends React.Component {
  render() {
    return (
      <div className="admin">
        <Header />
        <Login />
        <Write />
      </div>
    )
  }
} 

export default Admin
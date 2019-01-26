import * as React from 'react'
import Header from '../../modules/header'
import Main from '../../modules/main';

class Admin extends React.Component {
  render() {
    return (
      <div className="admin">
        <Header />
        <Main />
      </div>
    )
  }
} 

export default Admin
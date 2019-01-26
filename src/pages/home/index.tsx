import * as React from 'react'
import Header from '../../modules/header'
import Main from '../../modules/main'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Main />
      </div>
    )
  }
} 

export default Home
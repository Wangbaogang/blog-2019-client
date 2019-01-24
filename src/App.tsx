import React, { Component } from 'react'

import Header from './modules/header'
import Main from './modules/main'
class App extends Component {
  render() {
    return (
      <div className="App App--theme-default">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

import * as React from 'react'
import Logo from './logo'
import Tab from './tab'
import Search from './search'
import './index.scss'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <nav className="header-nav">
          <Tab />
        </nav>
        <Search />
      </header>
    )
  }
}

export default Header
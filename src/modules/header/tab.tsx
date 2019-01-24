import * as React from 'react'

interface ITabItem {
  label: string,
  href: string
}

const headerTabs: Array<ITabItem> = [
  {
    label: 'Articles',
    href: '/articles'
  },
  {
    label: 'About',
    href: '/about'
  },
]
class Tab extends React.Component {
  render() {
    return (
      <ul className="tabs">
        {
          headerTabs.map((tabItem: ITabItem, key) => (
            <li className="header-tab_item" key={key}>
              <a href={tabItem.href}>
                <span className="header-tab_item__text">{tabItem.label}</span>
                {/* <span className="header-tab_item__svg">{tabItem.label}</span> */}
              </a>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Tab
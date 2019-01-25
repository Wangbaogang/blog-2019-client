import * as React from 'react'

interface ITabItem {
  label: string,
  href: string,
  pic: any
}

const headerTabs: Array<ITabItem> = [
  {
    label: 'Articles',
    href: '/articles',
    pic: (<svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" stroke="red" strokeWidth="2" strokeLinejoin="bevel">
      <path d="M 4 4 H 32 V 12 H 4 Z" />
      <path d="M 4 16 H 32 M 4 20 H 32 M 4 24 H 32" />
      <path d="M 0 4 A 4 4 0 0 1 4 0 H 32 A 4 4 0 0 1 36 4 V 36 A 2 2 0 0 0 40 34 M 36 4 A 2 2 0 0 1 40 4 V 36 A 4 4 0 0 1 36 40 H 4 A 4 4 0 0 1 0 36 V 4" />
    </svg>)
  },
  {
    label: 'Snippets',
    href: '/snippets',
    pic: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" stroke="red" strokeWidth="2" strokeLinejoin="bevel">
        <path d="M 4 4 H 32 V 12 H 4 Z" />
        <path d="M 4 16 H 32 M 4 20 H 32 M 4 24 H 32" />
        <path d="M 0 4 A 4 4 0 0 1 4 0 H 32 A 4 4 0 0 1 36 4 V 36 A 2 2 0 0 0 40 34 M 36 4 A 2 2 0 0 1 40 4 V 36 A 4 4 0 0 1 36 40 H 4 A 4 4 0 0 1 0 36 V 4" />
      </svg>
    )
  },
  {
    label: 'About',
    href: '/about',
    pic: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" stroke="red" strokeWidth="2" strokeLinejoin="bevel">
        <path d="M 4 4 H 32 V 12 H 4 Z" />
        <path d="M 4 16 H 32 M 4 20 H 32 M 4 24 H 32" />
        <path d="M 0 4 A 4 4 0 0 1 4 0 H 32 A 4 4 0 0 1 36 4 V 36 A 2 2 0 0 0 40 34 M 36 4 A 2 2 0 0 1 40 4 V 36 A 4 4 0 0 1 36 40 H 4 A 4 4 0 0 1 0 36 V 4" />
      </svg>
    )
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
                {tabItem.pic}
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
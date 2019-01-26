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
      <path d="M 6 6 H 30 V 16 H 6 Z" />
      <path d="M 6 22 H 30 M 6 28 H 30 M 6 34 H 30" />
      <path d="M 0 4 A 4 4 0 0 1 4 0 H 32 A 4 4 0 0 1 36 4 V 36 A 2 2 0 0 0 40 34 M 36 4 A 2 2 0 0 1 40 4 V 36 A 4 4 0 0 1 36 40 H 4 A 4 4 0 0 1 0 36 V 4" />
    </svg>)
  },
  {
    label: 'Vedios',
    href: '/vedios',
    pic: (<svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" stroke="red" strokeWidth="2" strokeLinejoin="bevel">
      <circle cx="20" cy="20" r="20" stroke="red" />
      <circle cx="20" cy="20" r="14" stroke="red" />
      <path d="M 15 14 L 26 20 L 15 26 Z" />
    </svg>)
  },
  {
    label: 'Snippets',
    href: '/snippets',
    pic: (<svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" stroke="red" strokeWidth="2" strokeLinejoin="bevel">
      <path d="M 1 18 L 18 1 C 19 0, 21 0, 22 1 L 39 18 C 40 19, 40 21,39 22 L 22 39 C 21 40, 19 40, 18 39 L 1 22 C 0 21, 0 19, 1 18" />
      <path d="M 12 16 L 8 20 L 12 24" />
      <path d="M 28 16 L 32 20 L 28 24" />
      <path d="M 22 16 L 18 24" />
    </svg>)
  },
  {
    label: 'About',
    href: '/about',
    pic: (<svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" stroke="red" strokeWidth="2" strokeLinejoin="bevel">
      <path d="M 0 40 V 0 L 14 22 L 28 0 L 28 40" />
      <path d="M 24 24 H 40 A 8 8, 0, 1, 0, 40 25" strokeLinecap="butt" />
    </svg>)
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
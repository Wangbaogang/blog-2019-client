import * as React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div className="header-search">
        <form className="header-search_form">
          <input type="search" required placeholder="" className="header-search_form__input"/>
          <button type="submit" className="header-search_form__button">
            <span className="screen-reader-text">Search</span>
            <svg width="26px" height="26px">
              <circle r="10" cx="13" cy="13" fill="transparent" stroke="url(#logoSVGLinearGradient)" />
              <path d="M 6 20, L 0 26" stroke="url(#logoSVGLinearGradient)"/>
            </svg>
          </button>
        </form>
      </div>
    )
  }
}

export default Search
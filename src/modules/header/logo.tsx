import * as React from 'react'

class Logo extends React.Component {
  render() {
    return (
      <div className="header-logo">
        <a href="/">
          <div className="header-logo__svg">
            <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              {/* <path d="M 18 18 C 9 18, 9 0, 18 0 Z" stroke="red" fill="red"/>
              <path d="M 18 18 C 18 9, 36 9, 36 18 Z" stroke="red" fill="red"/>
              <path d="M 18 18 C 27 18, 27 36, 18 36 Z" stroke="red" fill="red"/>
              <path d="M 18 18 C 18 27, 0 27, 0 18 Z" stroke="red" fill="red"/> */}
              <defs>
                <linearGradient id="logoSVGLinearGradient">
                  <stop offset="20%" stopColor="#ff4d4f" />
                  <stop offset="40%" stopColor="#ff7a45" />
                  <stop offset="60%" stopColor="#ffa940" />
                  <stop offset="80%" stopColor="#ffc53d" />
                  <stop offset="100%" stopColor="#ffec3d" />
                </linearGradient>
              </defs>
              <path d="M 24 24, A 12 12, 0, 0, 1, 24 0" fill="url(#logoSVGLinearGradient)" fillOpacity=".95" stroke="transparent"/>
              <path d="M 24 24, A 12 12, 0, 0, 1, 48 24" fill="url(#logoSVGLinearGradient)" fillOpacity=".95" stroke="transparent"/>
              <path d="M 24 24, A 12 12, 0, 0, 1, 24 48" fill="url(#logoSVGLinearGradient)" fillOpacity=".95" stroke="transparent"/>
              <path d="M 24 24, A 12 12, 0, 0, 1, 0 24" fill="url(#logoSVGLinearGradient)" fillOpacity=".95" stroke="transparent"/>
            </svg>
          </div>
          <h1 className="header-logo__text">BLOG</h1>
        </a>
      </div>
    )
  }
}

export default Logo
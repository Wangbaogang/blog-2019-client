import * as React from 'react'

class Logo extends React.Component {
  render() {
    return (
      <div className="header-logo">
        <a href="/">
          <div className="header-logo__svg">
            <svg viewBox="0 0 36 36" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
              {/* <path d="M 18 18 C 9 18, 9 0, 18 0 Z" stroke="red" fill="red"/>
              <path d="M 18 18 C 18 9, 36 9, 36 18 Z" stroke="red" fill="red"/>
              <path d="M 18 18 C 27 18, 27 36, 18 36 Z" stroke="red" fill="red"/>
              <path d="M 18 18 C 18 27, 0 27, 0 18 Z" stroke="red" fill="red"/> */}
              <defs>
                <linearGradient id="logoSVGLinearGradient">
                  <stop offset="20%" stop-color="#ff4d4f" />
                  <stop offset="40%" stop-color="#ff7a45" />
                  <stop offset="60%" stop-color="#ffa940" />
                  <stop offset="80%" stop-color="#ffc53d" />
                  <stop offset="100%" stop-color="#ffec3d" />
                </linearGradient>
              </defs>
              <path d="M 18 18, A 9 9, 0, 0, 1, 18 0" fill="url(#logoSVGLinearGradient)" fill-opacity=".95" stroke="transparent"/>
              <path d="M 18 18, A 9 9, 0, 0, 1, 36 18" fill="url(#logoSVGLinearGradient)" fill-opacity=".95" stroke="transparent"/>
              <path d="M 18 18, A 9 9, 0, 0, 1, 18 36" fill="url(#logoSVGLinearGradient)" fill-opacity=".95" stroke="transparent"/>
              <path d="M 18 18, A 9 9, 0, 0, 1, 0 18" fill="url(#logoSVGLinearGradient)" fill-opacity=".95" stroke="transparent"/>
            </svg>
          </div>
          <h1 className="header-logo__text">BLOG</h1>
        </a>
      </div>
    )
  }
}

export default Logo
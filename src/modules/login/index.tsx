import * as React from 'react'
import './index.scss'

class Login extends React.Component {
  onSubmit = (evt:any) => {
    evt.preventDefault()
  }
  render() {
    return (
      <div className="login">
        <form id="login" className="form" onSubmit={this.onSubmit}>
        <div className="form-item">
          <label htmlFor="username" className="form-item__label">用户名</label>
          <input type="text" name="username" className="form-item__input"/>
        </div>
        <div className="form-item">
        <label htmlFor="login" className="form-item__label">密码</label>
        <input type="password" name="password" className="form-item__input"/>
        </div>
        <button type="submit" className="form-item submit-btn">登录</button>
        </form>
      </div>
    )
  }
}

export default Login
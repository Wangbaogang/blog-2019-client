import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Admin from './pages/admin'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App App--theme-default">
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

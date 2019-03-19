import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Menu from './components/Parts/Menu';
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
  
  showContentMenus(routes) {
    let kq = null;
    if (routes.length > 0) {
        kq = routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        ))
    }
    return kq;
}

render() {
  return (
      <Router>
          <div className="App">
              {/* Menu */}
              <Menu />
              {/* Noi dung */}
              <div style={{ padding: 20 }}>
                <Switch>
                    {this.showContentMenus(routes)}
                </Switch>
              </div>              
          </div>
      </Router>
  );
}
}

export default App;

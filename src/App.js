import React, { Component, Fragment } from 'react'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { Route, BrowserRouter } from 'react-router-dom'
import { router } from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Fragment>
            <Header />
            <BrowserRouter>
              <Fragment>
                {router.map(item => (
                  <Route
                    key={item.path}
                    path={item.path}
                    exact={item.exact}
                    component={item.component}
                  />
                ))}
              </Fragment>
            </BrowserRouter>
          </Fragment>
        </Provider>
      </div>
    )
  }
}

export default App

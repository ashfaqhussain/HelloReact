import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import App from './components/App'

const store = configureStore();

store.dispatch({
  type: 'SET_NAME',
  name: 'Bobbyyy Davrooo'
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
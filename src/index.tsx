import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import "./assets/css/argon-design-system-react.min.css"
import './assets/css/bootstrap.min.css'
import "./assets/vendor/nucleo/css/nucleo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

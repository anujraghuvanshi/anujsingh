import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
      console.log('Worker registration successful', registration.scope);
    }, function (err) {
      console.log('Worker registration failed', err);
    }).catch(function (err) {
      console.log(err);
    });
  });
} else {
  console.log('Service Worker is not supported by browser.');
}

ReactDOM.render(<App />, document.getElementById('root'))

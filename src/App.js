/*
 * @Description:
 * @Author: Eden
 * @Date: 2022-12-23 09:50:53
 * @LastEditTime: 2022-12-27 10:07:02
 * @LastEditors: Eden
 */
import logo from './logo.svg'
import './App.css'
import React from 'react'

function App() {
  const a = 1
  if (a === 1) console.log('12345678')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p></p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

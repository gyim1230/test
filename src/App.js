import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const axios = require('axios').default;

// const TASKS_URL = "http://localhost:4000"
const TASKS_URL = "https://ec2-15-165-220-68.ap-northeast-2.compute.amazonaws.com:3000"

function App() {
  const [count, setCount] = useState(0);

  const add = async() => {
    setCount(count + 1);

      const { data } = await axios.get(
        `${TASKS_URL}`,
        {

        },
        { withCredentials: true }
      );

    console.log("a", data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={add}>{count}</button>
      </header>
    </div>
  );
}

export default App;

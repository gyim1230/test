import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const axios = require('axios').default;

// const TASKS_URL = "http://localhost:4000"
const TASKS_URL = "http://ec2-15-165-220-68.ap-northeast-2.compute.amazonaws.com"
const TASKS_URLs = "https://ec2-15-165-220-68.ap-northeast-2.compute.amazonaws.com"

function App() {
  const [count, setCount] = useState(0);

  const add = async() => {
    setCount(count + 1);

      const { data } = await axios.get(
        `${TASKS_URL}:3000`,
        {

        },
        { withCredentials: true }
      );

    console.log("a", data)
  }

  const add2 = async() => {
    setCount(count + 1);

      const { data } = await axios.get(
        `${TASKS_URL}:443`,
        {

        },
        { withCredentials: true }
      );

    console.log("a", data)
  }

  const add3 = async() => {
    setCount(count + 1);

      const { data } = await axios.get(
        `${TASKS_URLs}:3000`,
        {

        },
        { withCredentials: true }
      );

    console.log("a", data)
  }

  const add4 = async() => {
    setCount(count + 1);

      const { data } = await axios.get(
        `${TASKS_URLs}:443`,
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
        <button type="button" onClick={add}>1</button>
        <button type="button" onClick={add2}>2</button>
        <button type="button" onClick={add3}>3</button>
        <button type="button" onClick={add4}>4</button>
      </header>
    </div>
  );
}

export default App;

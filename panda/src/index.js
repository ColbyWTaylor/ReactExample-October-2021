import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Panda from './Panda';

const name = "Panda"
const info = {
  city: "Miami",
  state: "Florida"
}

const StateGreeting = ({city, state, motto}) => {
  return (
    <div>
      <h1>Welcome to {city}, {state}</h1>
      <h2>Home of {motto}</h2>
      
    </div>

  )
}

ReactDOM.render(
  <StateGreeting city="Miami" state="Florida" motto="sunny" />,
  document.getElementById('root')
);
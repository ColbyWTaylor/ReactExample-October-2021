import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

function Ninjas({name}) {
  return <p>{name}</p>
}

function App() {
  return (
    <>
    <Ninjas name="Leonardo"/>
    <Ninjas name="Raphael"/>
    <Ninjas name="Michaelangelo"/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
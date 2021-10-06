import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

const ninjaList = [
  "Raphael",
  "Donatello",
  "Leonardo",
  "Mikey"
]

function App({ninjas}) {
  return (
    <>
    {ninjas.map(ninja => (
      <li>{ninja}</li>
    ))}
    </>
  )
}

ReactDOM.render(
  <App ninjas={ninjaList} />,
  document.getElementById('root')
);
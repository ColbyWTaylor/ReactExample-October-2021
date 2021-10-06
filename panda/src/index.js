import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

const ninjaList = [
  {id: 1, name: "Raphael"},
  {id: 1, name: "Leonardo"},
  {id: 1, name: "Donatello"},
  {id: 1, name: "Mikey"}
]

function App({ninjas}) {
  return (
    <>
    {ninjas.map(ninja => (
      <li key={ninja.id}>{ninja.name}</li>
    ))}
    </>
  )
}

ReactDOM.render(
  <App ninjas={ninjaList} />,
  document.getElementById('root')
);
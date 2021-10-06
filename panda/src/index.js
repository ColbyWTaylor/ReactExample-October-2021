import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

function App() {
  const [val,setVal] = useState("don't stop coding")
  const [val2,setVal2] = useState("grab a snickers")
  console.log(val)
  return (
    <>
    <p>first thing: <input value={val} onChange={(e)=> setVal(e.target.value)}/></p>
    <p>second thing: <input /></p>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
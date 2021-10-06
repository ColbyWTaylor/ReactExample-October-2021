import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

function App() {
  const [val,setVal] = useState("don't stop coding")
  const [val2,setVal2] = useState("grab a snickers")

  useEffect(()=> {
    console.log("value 1: " + val)
  }, [val])
  useEffect(()=> {
    console.log("value 2: " + val2)
  },[val2])
  return (
    <>
    <p>first thing: <input value={val} onChange={(e)=> setVal(e.target.value)}/></p>
    <p>second thing: <input onChange={(e) => setVal2(e.target.value)} /></p>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
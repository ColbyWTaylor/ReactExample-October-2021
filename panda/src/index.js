import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';


function App({ninjas}) {
  const [status, setStatus] = useState("Open")
  const [show,setShow] = useState("White Lotus")
  const [numberOfViewers, setNumberOfViewers] = useState(0)
  return (
    <>
    <p>The best show right now is {show}. It has {numberOfViewers} viewers</p>
    <button onClick={()=> setShow("Squid Games")}>update show to squid games</button>
    <button onClick={()=> setNumberOfViewers(numberOfViewers + 1)}>Increase Viewers</button>
    <p>useState status is {status}</p>
    <button onClick={()=> setStatus("Closed")}>Click me</button>
    <button onClick={()=> setStatus("Open")}>Click me</button>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);